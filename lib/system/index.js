/**
 * SystemAPI
 *
 *
 */
var LetLife = require("../letlife");
var Q = require("q");

LetLife.System = {

    ping: function( cb ){
      var deferred = Q.defer();
      LetLife.request.basic('GET', '/ping', null, function(req, res){
        if(res.code!== 200) deferred.reject(new LetLife.ApiError(req, res));

        return deferred.resolve(res.body);
      });
      return deferred.promise;
    }

}
