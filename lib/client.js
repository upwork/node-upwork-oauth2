/**
 * Upwork auth library for using with public API by OAuth2
 *
 * @package     UpworkAPI
 * @since       02/10/2018
 * @copyright   Copyright 2018(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module client
 * @requires simple-oauth2
 */

debug('export client module');

const request = require('request');
const { ClientCredentials, AuthorizationCode } = require('simple-oauth2');

const UpworkLibraryUserAgent = 'Github Upwork API NodeJS Client';

/**
 * @class Client
 * @constructor
 */
function Client(config) {
  debug('starting client')
  debug(config.clientId, 'with client id');
  debug(config.clientSecret, 'with client secret');
  debug(config.state, 'with state');

  this.config = config;
  this.baseUrl = config.baseUrl;
  this.entryPoint = undefined;
  this.tenantId = undefined;
  
  var oauth2Config = {
    client: {
      id: config.clientId,
      secret: config.clientSecret
    },
    auth: {
      tokenHost: config.tokenHost,
      tokenPath: config.tokenPath,
    },
    options: {
      authorizationMethod: 'body'
    },
    http: {
      headers: {
        'User-Agent': UpworkLibraryUserAgent
      },
    }
  };

  if (this.config.grantType === 'client_credentials') {
    this.simpleOauth2Client = new ClientCredentials(oauth2Config);
  } else {
    oauth2Config.auth['authorizePath'] = config.authorizePath;
    this.simpleOauth2Client = new AuthorizationCode(oauth2Config);
  }

  debug(this.simpleOauth2Client, 'got an oauth2 client');
}

/**
 * Get authorization URL and request token
 *
 * @method getAuthorizationUrl
 */
Client.prototype.getAuthorizationUrl = function() {
  debug(this.config.redirectUri, 'get authorization url with the specific request uri');
  
  return this.simpleOauth2Client.authorizeURL({
    redirect_uri: this.config.redirectUri,
    state: this.config.state 
  });
}

/**
 * Get access/refresh tokens pair
 *
 * @method getToken
 * @param authzCode {String} Authorization code
 * @param callback
 */
Client.prototype.getToken = async function(authzCode, callback) {
  var accessToken;
  var error;

  try {
    if (this.config.grantType == 'client_credentials') {
      accessToken = await this.simpleOauth2Client.getToken();
    } else {
      accessToken = await this.simpleOauth2Client.getToken({
        code: authzCode,
        redirect_uri: this.config.redirectUri
      });
    }
    debug(accessToken, 'Received an access token');
  } catch (error) {
    debug(error.message, 'Can not get valid Access Token');
    debug(error, 'Error');
  }

  callback(error, accessToken);
}

/**
 * Set new access/refresh token pair
 *
 * @method setAccessToken
 * @param tokenPair
 * @param callback
 * @async
 */
Client.prototype.setNewAccessTokenPair = function (tokenPair, callback) {
  debug(tokenPair, 'setting access token from token pair');
  let aToken = this.simpleOauth2Client.createToken(tokenPair.token);

  this.config.accessToken = aToken.token.access_token;
  this.config.refreshToken = aToken.token.refresh_token;
  callback(aToken.token);
}

/**
 * Set known access/refresh token pair
 * 
 * @method setAccessToken
 * @param callback
 * @async
 */
Client.prototype.setAccessToken = function(callback) {
  debug('setting access token from config');
  let aToken = this.simpleOauth2Client.createToken({
      access_token: this.config.accessToken,
      refresh_token: this.config.refreshToken,
      expires_in: this.config.expiresIn,
      expires_at: this.config.expiresAt
  });

  if (aToken.expired()) {
    debug('the access token has expired, refreshing');
    aToken.refresh().then((aToken) => {
      debug(aToken, 'received a new AccessToken object');
      this.config.accessToken = aToken.token.access_token;
      callback(aToken.token);
    });
  } else {
    callback(aToken.token);
  }
}

/**
 * Specify entry point used in base url
 *
 * @method setEntryPoint
 * @param entryPoint {String} Entry point, e.g. 'api' or 'gds'
 */
Client.prototype.setEntryPoint = function(entryPoint) {
  debug('updating entry point');
  this.entryPoint = entryPoint;
  // a trick to support different entry points in node-upwork
  if (entryPoint === 'graphql') {
    this.baseUrl = this.config.gqlUrl;
  } else {
    this.baseUrl = this.baseUrl.replace(/\/api\//i, '/' + entryPoint + '/');
  }
}

/**
 * Configure X-Upwork-API-TenantId header
 *
 * @method setOrgUidHeader
 * @param tenantId {String} Organization UID
 * @param callback
 * @async
 */
Client.prototype.setOrgUidHeader = function(tenantId, callback) {
  debug('setting organization uid header');
  this.tenantId = tenantId;
}

/**
 * Send GET request
 *
 * @method get
 * @param url {String} Relative URL
 * @param params {Hash} Parameters
 * @param callback
 * @async
 */
Client.prototype.get = function(url, params, callback) {
  debug('running GET request');
  this.sendRequest('GET', url, params, callback);
}

/**
 * Send POST request
 *
 * @method post
 * @param url {String} Relative URL
 * @param params {Hash} Parameters
 * @param callback
 * @async
 */
Client.prototype.post = function(url, params, callback) {
  debug('running POST request');
  this.sendRequest('POST', url, params, callback);
}

/**
 * Send PUT request
 *
 * @method get
 * @param url {String} Relative URL
 * @param params {Hash} Parameters
 * @param callback
 * @async
 */
Client.prototype.put = function(url, params, callback) {
  debug('running PUT request');
  this.sendRequest('PUT', url, params, callback);
}

/**
 * Send DELETE request
 *
 * @method delete
 * @param url {String} Relative URL
 * @param params {Hash} Parameters
 * @param callback
 * @async
 */
Client.prototype.delete = function(url, params, callback) {
  debug('running DELETE request');
  this.sendRequest('DELETE', url, params, callback);
}

/**
 * Send request
 *
 * @method sendRequest
 * @param method {String} HTTP method
 * @param url {String} Relative URL
 * @param params {Hash} Parameters
 * @param callback
 * @async
 */
Client.prototype.sendRequest = function (method, url, params, callback) {
  debug('sending request');

  var _params;
  switch (method) {
    case 'GET':
      _params = {qs: params};
      break;
    case 'POST':
      if (this.entryPoint !== 'graphql') {
        _params = {formData: params};
      }
      break;
    default:
      _params = {formData: Object.assign(params, {http_method: method.toLowerCase()})};
      method = 'POST';
  }

  var _options = {
    method: method,
    url: this.baseUrl + url + ((this.entryPoint === undefined || this.entryPoint == 'api') ? '.json' : ''),
    auth: {
      bearer: this.config.accessToken
    },
    headers: {
      'User-Agent': UpworkLibraryUserAgent
    }
  };
  // GraphQL support
  if (this.entryPoint === 'graphql') {
    if (this.tenantId !== undefined) {
      _options.headers['X-Upwork-API-TenantId'] = this.tenantId;
    }
    _options.headers['Content-Type'] = 'application/json';
    _options.body = JSON.stringify(params);
  }

  debug(_options, 'Options for request');
  debug(_params, 'Params for request');

  request(Object.assign(_options, _params), (err, httpResponse, body) => {
    if (err) {
      debug(err, 'Request error');
      debug(httpResponse, 'httpResponse');
      debug(body, 'Body');
    }
    callback(err, httpResponse.statusCode, parseResponse(body));
  });
}

/**
 * Parse response body
 *
 * @method parseResponse
 * @param body {String} Response body
 */
function parseResponse(body) {
  try {
    return JSON.parse(body);
  } catch (e) {
    return {};
  }
}

module.exports = Client;
