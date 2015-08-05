var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var config = require('../config/default.json');
var nock = require('nock');
var LF = require('../index');
var system = LF.System;


describe('LetLife SDK - System Services', function() {
  before( function(done){
    LF.config(config);
    return done();
  });

  it('.ping() should throw an ApiError on failure', function(done){
    var scope = nock(config.apiUrl, {})
        .get('/ping')
        .reply(500, { response: 'tested'});

    system.ping(function(err, res){
      expect(err).to.be.an.instanceof(LF.ApiError);
      expect( err.getMessage() ).to.be.a.string;
      err.statusCode.should.equal(500)
      return done();
    });

  });

  it('.ping() should return the response on success', function(done){
    var scope = nock(config.apiUrl, {})
        .get('/ping')
        .reply(200, { response: 'tested'});

    system.ping( function(err, res){
      expect(err).to.be.null;
      res.response.should.equal('tested');
      return done();
    });

  });


})
