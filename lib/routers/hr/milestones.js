/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       11/17/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.hr.milestones
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
 * @class Interviews
 * @constructor
 */
exports.Milestones = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get active Milestone for specific Contract
 *
 * @method getActiveMilestone
 * @param contractId {Hash} Contract reference
 * @param callback {String} Callback function
 * @async
 */
exports.Milestones.prototype.getActiveMilestone = function(contractId, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Get all Submissions for specific Milestone
 *
 * @method getSubmissions
 * @param milestoneId {Hash} Milestone reference
 * @param callback {String} Callback function
 * @async
 */
exports.Milestones.prototype.getSubmissions = function(milestoneId, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Create a new Milestone
 *
 * @method create
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Milestones.prototype.create = function(params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Edit an existing Milestone
 *
 * @method edit
 * @param milestoneId {Integer} Milestone ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Milestones.prototype.edit = function(milestoneId, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Activate an existing Milestone
 *
 * @method activate
 * @param milestoneId {Integer} Milestone ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Milestones.prototype.activate = function(milestoneId, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Approve an existing Milestone
 *
 * @method approve
 * @param milestoneId {Integer} Milestone ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Milestones.prototype.approve = function(milestoneId, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Delete an existing Milestone
 *
 * @method delete
 * @param milestoneId {Integer} Milestone ID
 * @param callback {String} Callback function
 * @async
 */
exports.Milestones.prototype.delete = function(milestoneId, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
