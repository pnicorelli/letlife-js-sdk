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

    var options = this.getDefaultOptions();
    options.headers['Content-Length'] = Buffer.byteLength(postData);
    options.headers['Authorization'] = 'Basic '+this.base64Credential();
    options.method = method;
    options.path = path;

    var req = transport.request(options, function(response) {
      var bearerData = '';
      response.setEncoding('utf8');

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        bearerData += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        try{
          return callback(options, {code: response.statusCode, body: JSON.parse(bearerData)});
        } catch (e) {
          return callback(options, {code: response.statusCode, body: bearerData});
        }

      });
    });
    req.on('error', function(e) {
      console.log(e);
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

    var options = this.getDefaultOptions();
    options.headers['Content-Length'] = Buffer.byteLength(postData);
    options.headers['Authorization'] = 'Bearer '+this.accessToken();
    options.method = method;
    options.path = path;

    var req = transport.request(options, function(response) {
      var bearerData = '';
      response.setEncoding('utf8');

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        bearerData += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        try{
          return callback(options, {code: response.statusCode, body: JSON.parse(bearerData)});
        } catch (e) {
          return callback(options, {code: response.statusCode, body: bearerData});
        }

      });
    });

    req.on('error', function(e) {
      console.log(e);
    });

    // write data to request body
    req.write(postData);
    req.end();
  },


  getDefaultOptions: function(){
    var address = url.parse(LetLife._option.apiUrl);
    var port = (address.protocol === 'https:')?443:80;
    switch(port){
      case 443:
        transport = require('https');
        break;
      default:
        transport = require('http');
    }
    var defaultOptions = {
      hostname: address.hostname,
      port: port,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': pjson.name+' v'+pjson.version
      }
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
