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
 * @module api
 * @requires debug, config, client
 */

debug = function (data, label) {
  var d = new Debug(process.env.UPWORK_API_DEBUG || false);
  d.log(data, label);
}

var Debug  = require('./debug')
  , Config = require('./config')
  , Client = require('./client');

/**
 * @property dataFormat
 * @type String
 * @default json
 * @final
 */
var dataFormat = 'json';

/**
 * @class UpworkApi
 * @constructor
 */
exports.UpworkApi = function(options, client) {
  debug('UpworkApi');
  if (client == null) {
    this.cfg = new Config(options);
    this.client = new Client(this.cfg);
  } else {
    this.client = client;
  }
}

/**
 * Get Authorization Url and request token
 *
 * @method getAuthorizationUrl
 */
exports.UpworkApi.prototype.getAuthorizationUrl = function() {
  debug('getting authorization url via UpworkApi');
  return this.client.getAuthorizationUrl();
}

/**
 * Get access/refresh token pair
 *
 * @method getToken
 * @param authzCode {String} Authorization code
 * @param callback
 */
exports.UpworkApi.prototype.getToken = function(authzCode, callback) {
  debug('getting access/refresh token via UpworkApi');
  this.client.getToken(authzCode, callback);
}

/**
 * Set known access/refresh token pair
 *
 * @method setAccessToken
 * @param callback
 * @async
 */
exports.UpworkApi.prototype.setAccessToken = function(callback) {
  debug('set access/refresh token');
  this.client.setAccessToken(callback);
}

/**
 * Set new access/refresh token pair
 *
 * @method setNewAccessTokenPair
 * @param tokenPair
 * @param callback
 * @async
 */
exports.UpworkApi.prototype.setNewAccessTokenPair = function(tokenPair, callback) {
  debug('set access/refresh token');
  this.client.setNewAccessTokenPair(tokenPair, callback);
}

/**
 * Configure X-Upwork-API-TenantId header
 *
 * @method setOrgUidHeader
 * @param tenantId {String} Organization UID
 * @param callback
 * @async
 */
exports.UpworkApi.prototype.setOrgUidHeader = function(tenantId, callback) {
  debug('setting organization uid header');
  this.client.setOrgUidHeader(tenantId, callback);
}
