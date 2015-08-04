var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var config = require('../config/default.json');
var nock = require('nock');
var LF = require('../index');
var account = LF.Account;

describe('LetLife SDK - Account Services', function() {
  before( function(done){
    LF.config(config);
    return done();
  });

  it('.emailExists() should throw an ApiError on failure', function(done){
    var scope = nock(config.apiUrl, {})
        .get('/v1/email_exists/e.snowden@nsa.gov')
        .reply(500, { });

    account.emailExists('e.snowden@nsa.gov', function( err, result){
        expect(err).to.be.an.instanceof(LF.ApiError);
        err.statusCode.should.equal(500)
        return done();
    });
  });

  it('.emailExists() should return a boolean on success', function(done){
    var scope = nock(config.apiUrl, {})
        .get('/v1/email_exists/e.snowden@nsa.gov')
        .reply(200, { result: true});

    account.emailExists('e.snowden@nsa.gov', function(err, res){
      expect(err).to.be.null;
      res.should.equal(true);
      return done();
    })

  });


})
