/**
 * SystemAPI
 *
 *
 */
var LetLife = require("../letlife");

LetLife.System = {

    ping: function( cb ){
      LetLife.request.basic('GET', '/ping', null, function(req, res, cb){
        if(res.code!== 200) throw new LetLife.ApiError(req, res);

        return cb(req, res);
      });
    }

}
