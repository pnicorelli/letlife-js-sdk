/**
 * Account
 *
 *
 */
var LetLife = require("../letlife");
var Q = require("q");

LetLife.Account = {

    /**
     * Check if the email exists on the server
     * @param  {string}   email
     * @return  {Function} cb( boolean )  true if email exists, false otherwise
     */
    emailExists: function( email ){
      var deferred = Q.defer();
      LetLife.request.basic('GET', '/v1/email_exists/'+email, null, function(req, res){
        if(res.code!== 200) deferred.reject(new LetLife.ApiError(req, res));

        return deferred.resolve(res.body.result);
      });
      return deferred.promise;
    },

    authToken: function(email, password){
      var deferred = Q.defer();
      var data = {
        grant_type: 'password',
        username: email,
        password: password
      }
      LetLife.request.basic('POST', '/auth/token', data, function(req, res){
        if(res.code!== 200) deferred.reject(new LetLife.ApiError(req, res));

        return deferred.resolve(res.body);
      });
      return deferred.promise;
    }
}
