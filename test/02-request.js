var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var nock = require('nock');
var LetLife = require('../index');

describe('LetLife SDK request', function() {

  it('should perform a basic request', function(done){

    var scope = nock('http://api.test/', {
          reqheaders: {
            'Authorization': 'Basic ZXNyZXZlcjplc3JldmVy'
          }
        })
        .get('/test')
        .reply(200, { response: 'tested'});

    LetLife.config({
      apiUrl: "http://api.test",
      basicAuthUser: 'esrever',
      basicAuthPassword: 'esrever'
    });
    LetLife.request.basic('GET', '/test', null, function(code, body){
        code.should.be.equal(200);
        body.response.should.be.equal('tested');
        return done();
    });

  });

  it('should fail a bearer request on missing token', function(done){

    LetLife.config({
      apiUrl: "http://api.test"
    });

    var funct = function(){ LetLife.request.bearer('GET', '/test', null, null); };

    expect( funct ).to.throw(Error);
    return done();
  });


    it('should perform a bearer request', function(done){

      var scope = nock('http://api.test/', {
            reqheaders: {
              'Authorization': 'Bearer ZXNyZXZlcjplc3JldmVy'
            }
          })
          .get('/test')
          .reply(200, { response: 'b tested'});

      LetLife.config({
        apiUrl: "http://api.test",
        bearerToken: 'ZXNyZXZlcjplc3JldmVy'
      });
      LetLife.request.bearer('GET', '/test', null, function(code, body){
          code.should.be.equal(200);
          body.response.should.be.equal('b tested');
          return done();
      });

    });


});
