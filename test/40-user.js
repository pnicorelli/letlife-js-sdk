var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var config = require('../config/default.json');
var nock = require('nock');

var LF = require('../index');
var user = LF.User;

describe('LetLife SDK - User Services', function() {
  before(function(){
    LF.config({accessToken: ""});
  });

  it('.info() should throw an Error on missing accessToken', function(done){

    var p = function(){ return user.info().done(); }
    expect(p).to.throw(Error);
    return done();

  });

  it('.info() should throw an ApiError on auth failure', function(done){
    var scope = nock(config.apiUrl, {})
      .get('/v1/user')
      .reply(500, { });

    LF.config({accessToken: "InvalidAccessToken"});
    user.info()
      .then()
      .catch(function( err ){
        expect(err).to.be.an.instanceof(LF.ApiError);
        err.statusCode.should.equal(500)
        return done();
      }).done();

  });

  it('.info() should return a valid JSON', function(done){
    var scope = nock(config.apiUrl, {})
      .get('/v1/user')
      .reply(200, {
        "user":
        {
          "_id":"545dbb5fd2472eb94c324b22",
          "email":"jk.mcgill@usa.gov",
          "phoneNumber":"555-555-555",
          "first": "J. Kirk",
          "last": "McGill",
          "gender": "m"
        }
      });

    user.info().then( function(res){
      res.email.should.equal("jk.mcgill@usa.gov");
      res.phoneNumber.should.equal("555-555-555");
      return done();
    }).done();

  });


})
