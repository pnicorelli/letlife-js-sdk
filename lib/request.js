var LetLife = require("./letlife");
var url = require('url');
var pjson = require('../package.json');
var transport;

LetLife.request = {

  /*
  * perform a basic request
  */
  basic: function(method, path, body, callback){
    if( body === null){
      var postData = '';
    } else {
      var postData = JSON.stringify(body);
    }

    var options = this.getDefaultOptions( method );
    options.headers['Content-Length'] = Buffer.byteLength(postData);
    options.headers['Authorization'] = 'Basic '+this.base64Credential();
    options.path = path;

    var req = transport.request(options, function(response) {
      var recData = '';
      response.setEncoding('utf8');

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        recData += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        try{
          return callback(options, {code: response.statusCode, body: JSON.parse(recData)});
        } catch (e) {
          return callback(options, {code: response.statusCode, body: recData});
        }

      });
    });
    req.on('error', function(e) {
      callback(options, {code: 500, body: e});
    });

    // write data to request body
    req.write(postData);
    req.end();
  },


  /*
  * perform a bearer request (based on access_token)
  */
  bearer: function(method, path, body, callback){
    if( body === null){
      var postData = '';
    } else {
      var postData = JSON.stringify(body);
    }

    var options = this.getDefaultOptions( method );
    options.headers['Content-Length'] = Buffer.byteLength(postData);
    options.headers['Authorization'] = 'Bearer '+this.accessToken();
    options.path = path;
    transport = require('http');
    var req = transport.request(options, function(response) {
      var recData = '';
      response.setEncoding('utf8');

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        recData += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        try{
          return callback(options, {code: response.statusCode, body: JSON.parse(recData)});
        } catch (e) {
          return callback(options, {code: response.statusCode, body: recData});
        }

      });
    });

    req.on('error', function(e) {
      callback(options, {code: 500, body: e});
    });

    // write data to request body
    req.write(postData);
    req.end();
  },


  getDefaultOptions: function( method ){
    var address = url.parse(LetLife._option.apiUrl);
    var port = (address.protocol === 'https:')?443:80;
    if( address.port !== null ){
      port = address.port;
    }
    transport = (address.protocol == 'https:')? require('https'):require('http');
    var defaultOptions = {
      keepAlive: true,
      keepAliveMsecs: 500,
      hostname: address.hostname,
      protocol: address.protocol,
      port: port,
      headers: {
        'Origin': 'http://localhost',
        'Access-Control-Request-Method': method,
        'Access-Control-Request-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'User-Agent': pjson.name+' v'+pjson.version
      },
      method: method
    };
    return defaultOptions;
  },

  /*
  * return digest base64(user:pass)
  */
  base64Credential: function(){
    return new Buffer(LetLife._option.basicAuthUser+':'+LetLife._option.basicAuthPassword).toString('base64');
  },

  /*
  * return bearer token from config
  */
  accessToken: function(){
    // check if access_token is set in _option
    if( LetLife._option.accessToken.length > 0 ){
      return LetLife._option.accessToken;
    } else {
      throw new Error("Bearer Token not set");
    }
  }
};
