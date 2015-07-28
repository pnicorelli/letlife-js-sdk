var LetLife = require("./letlife");
var _req = require('request');
var pjson = require('../package.json');

LetLife.request = {

  /*
  * perform a basic request
  */
  basic: function(method, endpoint, body, callback){
    var option = {
      url: endpoint,
      baseUrl: LetLife._option.apiUrl,
      method: method,
      headers: {
        'User-Agent': pjson.name+' v'+pjson.version,
        'Authorization': 'Basic '+this.base64Credential()
      },
      body: body
    };

    _req(option, function (err, response, body) {

      if(err) throw new Error(err);

      try {
        return callback(response.statusCode, JSON.parse(body));
      } catch( e ){
        return callback(response.statusCode, body);
      }

    });
  },


  /*
  * perform a bearer request (based on access_token)
  */
  bearer: function(method, endpoint, body, callback){
    var option = {
      url: endpoint,
      baseUrl: LetLife._option.apiUrl,
      method: method,
      headers: {
        'User-Agent': pjson.name+' v'+pjson.version,
        'Authorization': 'Bearer ' + this.bearerToken()
      },
      body: body
    };

    _req(option, function (err, response, body) {

      if(err) throw new Error(err);

      if( response.statusCode === 401){
        throw new Error("401 - Invalid token");
      }

      try {
        return callback(response.statusCode, JSON.parse(body));
      } catch( e ){
        return callback(response.statusCode, body);
      }

    });
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
  bearerToken: function(){
    // check if access_token is set in _option
    if( LetLife._option.bearerToken.length > 0 ){
      return LetLife._option.bearerToken;
    } else {
      throw new Error("Bearer Token not set");
    }
  }
};
