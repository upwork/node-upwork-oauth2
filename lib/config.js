/**
 * Upwork auth library for using with public API by OAuth2
 *
 * @package     UpworkAPI
 * @since       02/09/2018
 * @copyright   Copyright 2018(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module config
 */

const authorizePath = '/ab/account-security/oauth2/authorize';

/**
 * @class Config
 * @constructor
 */
function Config(options) {
  this.clientId = options.clientId;
  this.clientSecret = options.clientSecret;
  this.redirectUri = options.redirectUri;
  this.grantType = options.grantType;
  this.accessToken = options.accessToken;
  this.refreshToken = options.refreshToken;
  this.expiresIn = options.expiresIn;
  this.expiresAt = options.expiresAt;
  this.state = options.state;
  this.debug = options.debug || false;
  this.authorizePath = '/ab/account-security/oauth2/authorize';
  this.tokenPath = '/api/v3/oauth2/token';
  this.tokenHost = 'https://www.upwork.com';
  this.baseUrl = this.tokenHost + '/api/';
  this.gqlUrl = 'https://api.upwork.com/graphql';

  if (this.debug) {
    process.env.UPWORK_API_DEBUG = true;
  }
}

module.exports = Config;
