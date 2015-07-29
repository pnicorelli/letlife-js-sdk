var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var config = require('config');
var nock = require('nock');
var LF = require('../index');
var user = LF.User;

describe('LetLife SDK - User Services', function() {

  it('.info() should throw an ApiError on missing access_token', function(done){
    var scope = nock(config.apiUrl, {})
        .get('/v1/user')
        .reply(401, "Unauthorized");

    user.info()
      .then()
      .catch(function( err ){
        expect(err).to.be.an.instanceof(LF.ApiError);
        err.statusCode.should.equal(401)
        return done();
      });

  });

    it('.info() should throw an ApiError on failure', function(done){
      var scope = nock(config.apiUrl, {})
          .get('/v1/user')
          .reply(500, { });

      user.info()
        .then()
        .catch(function( err ){
          expect(err).to.be.an.instanceof(LF.ApiError);
          err.statusCode.should.equal(500)
          return done();
        });

    });

  it('.info() should return a valid JSON', function(done){
    var scope = nock(config.apiUrl, {})
        .get('/v1/user')
        .reply(200, { result: false});

    user.info().then( function(res){
      res.should.contain("true");
      return done();
    });

  });


})
