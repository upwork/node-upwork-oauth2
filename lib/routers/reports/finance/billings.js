/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/26/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.reports.finance.billings
 */

/**
 * @property entryPoint
 * @type String
 * @default gds
 * @static
 * @final
 */
var entryPoint = 'gds';

/**
 * @class Billings
 * @constructor
 */
exports.Billings = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Generate Billing Reports for a Specific Freelancer
 *
 * @method getByFreelancer
 * @param freelancerReference {Integer} Freelancer reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Billings.prototype.getByFreelancer = function(freelancerReference, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Generate Billing Reports for a Specific Freelancer's Team
 *
 * @method getByFreelancersTeam
 * @param freelancerTeamReference {Integer} Freelancer team reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Billings.prototype.getByFreelancersTeam = function(freelancerTeamReference, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Generate Billing Reports for a Specific Freelancer's Company
 *
 * @method getByFreelancersCompany
 * @param freelancerCompanyReference {Integer} Freelancer company reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Billings.prototype.getByFreelancersCompany = function(freelancerCompanyReference, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Generate Billing Reports for a Specific Buyer's Team
 *
 * @method getByBuyersTeam
 * @param buyerTeamReference {Integer} Buyer team reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Billings.prototype.getByBuyersTeam = function(buyerTeamReference, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}

/**
 * Generate Billing Reports for a Specific Buyer's Company
 *
 * @method getByBuyersCompany
 * @param buyerCompanyReference {Integer} Buyer company reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Billings.prototype.getByBuyersCompany = function(buyerCompanyReference, params, callback) {
  debug('running request');
  throw new Error('The legacy API was deprecated. Please, use GraphQL call - see example in this library.');
}
