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

const oauth2 = require('simple-oauth2');
const request = require('request');

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
  
  this.oauth2 = oauth2.create({
    client: {
      id: config.clientId,
      secret: config.clientSecret
    },
    auth: {
      tokenHost: config.tokenHost,
      tokenPath: config.tokenPath,
      authorizePath: config.authorizePath
    },
    http: {
      headers: {
        'User-Agent': UpworkLibraryUserAgent
      },
    }
  });

  debug(oauth2, 'got an oauth2 client');
}

/**
 * Get authorization URL and request token
 *
 * @method getAuthorizationUrl
 */
Client.prototype.getAuthorizationUrl = function() {
  debug(this.config.redirectUri, 'get authorization url with the specific request uri');
  
  return this.oauth2.authorizationCode.authorizeURL({
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
Client.prototype.getToken = function(authzCode, callback) {
  this.oauth2.authorizationCode.getToken({
    code: authzCode,
    redirect_uri: this.config.redirectUri
  }, callback);
}

/**
 * Set new access/refresh token pair
 *
 * @method setAccessToken
 * @param tokenPair
 * @param callback
 * @async
 */
Client.prototype.setNewAccessTokenPair = function(tokenPair, callback) {
  debug('setting access token from config');
  let aToken = this.oauth2.accessToken.create(tokenPair);

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
  let aToken = this.oauth2.accessToken.create({
      access_token: this.config.accessToken,
      refresh_token: this.config.refreshToken,
      expires_in: this.config.expiresIn,
      expires_at: this.config.expiresAt
  });

  if (aToken.expired()) {
    debug('the access token has expired, refreshing');
    aToken.refresh((error, result) => {
      aToken = result;
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
  // a trick to support different entry points in node-upwork
  this.baseUrl = this.baseUrl.replace(/\/api\//i, '/' + entryPoint + '/');
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
      _params = {formData: params};
      break;
    default:
      method = 'POST';
      _params = {formData: Object.assign(params, {http_method: method.toLowerCase()})};
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

  request(Object.assign(_options, _params), (err, httpResponse, body) => {
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
