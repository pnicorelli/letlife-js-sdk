/**
 * User
 *
 *
 */
var LetLife = require("../letlife");
var Q = require("q");

LetLife.User = {

    /**
     * Get the user data
     */
    info: function( cb ){
      var deferred = Q.defer();
      LetLife.request.bearer('GET', '/v1/user', null, function(req, res){
        if(res.code!== 200) deferred.reject(new LetLife.ApiError(req, res));

        return deferred.resolve(res.body.user);
      });
      return deferred.promise;
    }
}
