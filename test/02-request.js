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
    LetLife.request.basic('GET', '/test', null, function(req, res){
        res.code.should.be.equal(200);
        res.body.response.should.be.equal('tested');
        return done();
    });

  });


    it('should perform a basic request with POST data', function(done){

      var scope = nock('http://api.test/', {
            reqheaders: {
              'Authorization': 'Basic ZXNyZXZlcjplc3JldmVy'
            }
          })
          .get('/test', {
            data: "something"
          })
          .reply(200, null);

      LetLife.config({
        apiUrl: "http://api.test",
        basicAuthUser: 'esrever',
        basicAuthPassword: 'esrever'
      });
      LetLife.request.basic('GET', '/test', { "data": "something"}, function(req, res){
          res.code.should.be.equal(200);
          expect(res.body).to.be.empty;
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
        accessToken: 'ZXNyZXZlcjplc3JldmVy'
      });
      LetLife.request.bearer('GET', '/test', null, function(req, res){
          res.code.should.be.equal(200);
          res.body.response.should.be.equal('b tested');
          return done();
      });

    });

    it('should perform a bearer request with POST data', function(done){

      var scope = nock('http://api.test/', {
            reqheaders: {
              'Authorization': 'Bearer ZXNyZXZlcjplc3JldmVy'
            }
          })
          .get('/test', {
            data: "something"
          })
          .reply(200, "null");

      LetLife.config({
        apiUrl: "http://api.test",
        accessToken: 'ZXNyZXZlcjplc3JldmVy'
      });
      LetLife.request.bearer('GET', '/test', {"data": "something"}, function(req, res){
          res.code.should.be.equal(200);
          res.body.should.be.equal('null');
          return done();
      });

    });

    it('should perform a request with non standard port', function(done){

      var scope = nock('http://api.test:8080/', {
            reqheaders: {
              'Authorization': 'Bearer ZXNyZXZlcjplc3JldmVy'
            }
          })
          .get('/test', {
            data: "something"
          })
          .reply(200, "null");

      LetLife.config({
        apiUrl: "http://api.test:8080",
        accessToken: 'ZXNyZXZlcjplc3JldmVy'
      });
      LetLife.request.bearer('GET', '/test', {"data": "something"}, function(req, res){
          res.code.should.be.equal(200);
          res.body.should.be.equal('null');
          return done();
      });

    });

    it('should get an Error when basic request fail', function(done){

      var scope = nock('http://api.test:8080/', {
            reqheaders: {
              'Authorization': 'Basic ZXNyZXZlcjplc3JldmVy'
            }
          })
          .get('/test', {
            data: "something"
          })
          .replyWithError({'error': 'something awful happened'});

      LetLife.config({
        apiUrl: "http://api.test:8080",
        accessToken: 'ZXNyZXZlcjplc3JldmVy'
      });
      LetLife.request.basic('GET', '/test', {"data": "something"}, function(req, res){
          res.code.should.be.equal(500);
          res.body.should.not.be.empty;
          return done();
      });

    });

    it('should get an Error when bearer request fail', function(done){

      var scope = nock('http://api.test:8080/', {
            reqheaders: {
              'Authorization': 'Bearer ZXNyZXZlcjplc3JldmVy'
            }
          })
          .get('/test', {
            data: "something"
          })
          .replyWithError({'error': 'something awful happened'});

      LetLife.config({
        apiUrl: "http://api.test:8080",
        accessToken: 'ZXNyZXZlcjplc3JldmVy'
      });
      LetLife.request.bearer('GET', '/test', {"data": "something"}, function(req, res){
          res.code.should.be.equal(500);
          res.body.should.not.be.empty;
          return done();
      });

    });


});
