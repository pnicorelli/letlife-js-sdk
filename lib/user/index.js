/**
 * User
 *
 *
 */
var LetLife = require("../letlife");
var Q = require("q");

LetLife.User = {

    /**
     * Check if the email exists on the server
     * @param  {string}   email
     * @return  {Promise} true if email exists, false otherwise
     */
    info: function( cb ){
      var deferred = Q.defer();
      LetLife.request.bearer('GET', '/v1/user', null, function(req, res){
        if(res.code!== 200) deferred.reject(new LetLife.ApiError(req, res));

        return deferred.resolve(res.body);
      });
      return deferred.promise;
    }
}
