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
 * @module routes.activities.team
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
 * @class Team
 * @constructor
 */
exports.Team = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get by type
 *
 * @method _getUrlByType
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param code {String} Code
 * @return {String} Relative api URL
 * @private
 */
var _getUrlByType = function(company, team, code) {
  debug('preparing url');
  var _url = '';
  if (code) {
    _url = '/' + code;
  }

  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * List all oTask/Activity records within a Team
 *
 * @method getList
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param callback {String} Callback function
 * @async
 */
exports.Team.prototype.getList = function(company, team, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * List all oTask/Activity records within a Team by specified code(s)
 *
 * @method getSpecificList
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param code {String} Code
 * @param callback {String} Callback function
 * @async
 */
exports.Team.prototype.getSpecificList = function(company, team, code, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Create an oTask/Activity record within a Team
 *
 * @method addActivity
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param callback {String} Callback function
 * @async
 */
exports.Team.prototype.addActivity = function(company, team, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Update specific oTask/Activity record within a Team
 *
 * @method updateActivity
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param code {String} Code
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Team.prototype.updateActivity = function(company, team, code, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Archive specific oTask/Activity record within a Team
 *
 * @method archiveActivity
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param code {String} Code, may be a semicolon separated list of codes
 * @param callback {String} Callback function
 * @async
 */
exports.Team.prototype.archiveActivity = function(company, team, code, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Unarchive specific oTask/Activity record within a Team
 *
 * @method unarchiveActivity
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param code {String} Code, may be a semicolon separated list of codes
 * @param callback {String} Callback function
 * @async
 */
exports.Team.prototype.unarchiveActivity = function(company, team, code, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Update a bulk of oTask/Activity records
 *
 * @method updateBatch
 * @param company {String} Company ID
 * @param callback {String} Callback function
 * @async
 */
exports.Team.prototype.updateBatch = function(company, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
