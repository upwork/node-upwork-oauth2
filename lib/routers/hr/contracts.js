/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/24/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.hr.contracts
 */

/**
 * @property entryPoint
 * @type String
 * @default api
 * @static
 * @final
 */
var entryPoint = 'api';

/**
 * @class Users
 * @constructor
 */
exports.Contracts = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Suspend Contract
 *
 * @method suspendContract
 * @param reference {Integer} Contract reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Contracts.prototype.suspendContract = function(reference, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Restart Contract
 *
 * @method restartContract
 * @param reference {Integer} Contract reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Contracts.prototype.restartContract = function(reference, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * End Contract
 *
 * @method endContract
 * @param reference {Integer} Contract reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Contracts.prototype.endContract = function(reference, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
