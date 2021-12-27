/**
 * Example of usage UpworkAPI
 *
 * @package     UpworkAPI
 * @since       10/02/2018
 * @copyright   Copyright 2018(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

var config = {
  'clientId' : 'xxxxxxxx',
  'clientSecret' : 'xxxxxxxx',
  'redirectUri' : 'xxxxxxxx',
//  'accessToken' : 'xxxxxxxx', // assign if known
//  'refreshToken' : 'xxxxxxxx', // assign if known
//  'expiresIn' : '86399', // assign if known
//  'expiresAt' : '2018-01-01T08:30:45.016Z', // assign if known
//  'state' : 'a-random-string',
//  'debug' : true
};

//var UpworkApi = require('../') // uncomment to use inside current package/sources
var UpworkApi = require('node-upwork-oauth2') // use if package is installed via npm
//  , Auth = require('../lib/routers/auth').Auth // uncomment to use inside current package/sources
  , Auth = require('node-upwork-oauth2/lib/routers/auth').Auth // use if package is installed via npm
  , Messages = require('node-upwork-oauth2/lib/routers/messages').Messages // use if package is installed via npm
  , Graphql = require('node-upwork-oauth2/lib/routers/graphql').Graphql // use if package is installed via npm
  , rl = require('readline');

// you can use your own client for OAuth2 (Authorization Code Grant) routine, just identify it here
// and use as a second parameter for UpworkApi constructor (see the example of usage below)
// note: your client must support the following methods:
// 1. getAuthorizationUrl - authorization url, based on provided config
// 2. getToken(authzCode, callback) - requests access/refresh token pair using known authorization code
// 3. setAccessToken(callback) - sets known access/refresh token pair based on provided config
// 4. get|post|put|delete(path, data, callback) - for GET, POST, PUT and DELETE methods respectively
// 5. setEntryPoint(entryPoint) - allows setup different entry point for base url
//
// var MyClient = require('../lib/myclient');
//
// by default predefined lib/client.js will be used that works with simple-oauth2 library

// a function to get access/refresh token pair
function getAccessTokenPair(api, callback) {
  debug('getting access/refresh token pair');
  // get authorization url
  var url = api.getAuthorizationUrl(config.redirectUri);
  debug(url, 'got authorization url');

  // authorize application
  var i = rl.createInterface(process.stdin, process.stdout);
  i.question('Please, visit an url ' + url + ' and enter a verifier: ', function(authzCode) {
    i.close();
    process.stdin.destroy();
    debug(authzCode, 'entered verifier is');

    // get access token/secret pair
    api.getToken(authzCode, function(error, accessToken) {
      if (error) throw new Error(error);

      debug(accessToken, 'got an access token');
      callback(accessToken);
    });
  });
};

// get my data
function getUserData(api, callback) {
  // make a call
  var auth = new Auth(api);
  auth.getUserInfo(function(error, httpStatus, data) {
    // check error and httpStatus if needed and run your own error handler
    debug(httpStatus, 'response status');
    debug(data, 'received response');
    callback(data);
  });
}

// post a message
function sendMessageToRoom(api, callback) {
  // make a call
  var messages = new Messages(api);
  var params = {
    'story': '{"message": "a test message", "userId": "~01xxxxxxxx"}'
  };
  // NOTE: parameters are wrong - the response will produce an error, for instance
  messages.sendMessageToRoom('company_id', 'room_id', params, (error, httpStatus, data) => {
    // check error and httpStatus if needed and run your own error handler
    debug(httpStatus, 'response status');
    debug(data, 'received response');
    callback(data);
  });
}

// send GraphQL query
function sendGraphqlQuery(api, callback) {
  // make a call
  var graphql = new Graphql(api);
  var params = {
    'query': `query {
      user {
        id
        nid
        rid
      }
      organization {
        id
      }
    }`,
  };
  graphql.execute(params, (error, httpStatus, data) => {
    // check error and httpStatus if needed and run your own error handler
    debug(httpStatus, 'response status');
    debug(data, 'received response');
    callback(data);
  });
}

(function main() {
  // uncomment only if you want to use your own client
  // make sure you know what you're doing
  // var client = new MyClient(config);
  // var api = new UpworkApi(null, client);

  // use a predefined client for OAuth routine
  var api = new UpworkApi(config);
  // GraphQL requests require X-Upwork-API-TenantId header, which can be setup using the following method
  // api.setOrgUidHeader('1234567890'); // Organization UID (optional)

  if (!config.accessToken || !config.refreshToken) {
    // run authorization in case we haven't done it yet
    // and do not have an access/refresh token pair
    getAccessTokenPair(api, function(tokenPair) {
      debug(tokenPair.access_token, 'current access token is');
      // store access/refresh token data in the safe place!

      api.setNewAccessTokenPair(tokenPair, function(tokenPair) {
        // get my auth data
        getUserData(api, (data) => {
          debug(data, 'response');
          console.log('Hello: ' + data.auth_user.first_name);
        });
      });
    });
  } else {
    // setup access/refresh token pair in case it is already known
    api.setAccessToken(function(tokenPair) {
      // get my auth data
      debug(tokenPair.access_token, 'current access token is');
      // WARNING: the access token will be refreshed automatically for you
      // in case it's expired, i.e. expires_at < time(). Make sure you replace the
      // old token accordingly in your security storage. Simply, compare the old
      // access token with the new one returned in tokenPair to sync-up the data
      getUserData(api, (data) => {
        // first_name
        console.log('Hello: ' + data.auth_user.first_name);
      });
      sendMessageToRoom(api, (data) => {
        // do smth here with the data
	console.log(data);
      });
      sendGraphqlQuery(api, (data) => {
        // do smth here with the data
	console.log(data);
      });
    });
  }
})();
