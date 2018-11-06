var Config = require('../lib/config')
  , assert = require("assert");

describe('config', function(){
  var config;

  beforeEach(function(){
    var options = {
      'clientId' : 'xxxxx',
      'clientSecret' : 'xxxx',
      'accessToken' : 'xx',
      'refreshToken' : 'x',
      'redirectUri' : 'https',
      'expiresIn' : '12',
      'expiresAt' : '2018-01-01',
      'state' : 'random',
      'debug' : true
    }
    config = new Config(options);
  });

  describe('test config setup', function(){
    it('should setup config according provided options', function(){
      assert.equal(config.clientId, 'xxxxx');
      assert.equal(config.clientSecret, 'xxxx');
      assert.equal(config.accessToken, 'xx');
      assert.equal(config.refreshToken, 'x');
      assert.equal(config.redirectUri, 'https');
      assert.equal(config.expiresIn, '12');
      assert.equal(config.expiresAt, '2018-01-01');
      assert.equal(config.state, 'random');
      assert.equal(config.debug, true);
    })
  })
})
