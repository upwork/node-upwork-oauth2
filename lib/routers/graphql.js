/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       12/20/2021
 * @copyright   Copyright 2021(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.graphql
 */

/**
 * @property entryPoint
 * @type String
 * @default graphql
 * @static
 * @final
 */
var entryPoint = 'graphql';

/**
 * @class Graphql
 * @constructor
 */
exports.Graphql = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
  this.api.client.setEntryPoint(this.api.epoint);
}

/**
 * Execute GraphQL request
 *
 * @method execute
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Graphql.prototype.execute = function(params, callback) {
  debug('running request');
  this.api.client.post('', params, callback);
}
