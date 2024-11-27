/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/23/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.metadata
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
 * @class Metadata
 * @constructor
 */
exports.Metadata = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Categories (v2)
 *
 * @method getCategoriesV2
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getCategoriesV2 = function(callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get Skills
 *
 * @method getSkills
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getSkills = function(callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get Skills V2
 *
 * @method getSkillsV2
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getSkillsV2 = function(callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get specialties
 *
 * @method getSpecialties
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getSpecialties = function(callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get Regions
 *
 * @method getRegions
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getRegions = function(callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get Tests
 *
 * @method getTests
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getTests = function(callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get Reasons
 *
 * @method getReasons
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getReasons = function(params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
