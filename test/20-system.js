var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var config = require('config');
var nock = require('nock');
var LF = require('../index');
var system = LF.System;

describe('LetLife SDK - System Services', function() {

  it('.ping() should throw an ApiError on failure', function(done){
    var scope = nock(config.apiUrl, {})
        .get('/ping')
        .reply(500, { response: 'tested'});

    system.ping()
      .then()
      .catch(function( err ){
        expect(err).to.be.an.instanceof(LF.ApiError);
        err.statusCode.should.equal(500)
        return done();
      });

  });

  it('.ping() should return the response on success', function(done){
    var scope = nock(config.apiUrl, {})
        .get('/ping')
        .reply(200, { response: 'tested'});

    system.ping().then( function(res){
      res.response.should.equal('tested');
      return done();
    });

  });


})
