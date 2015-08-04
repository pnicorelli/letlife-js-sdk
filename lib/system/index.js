/**
 * SystemAPI
 *
 *
 */
var LetLife = require("../letlife");

LetLife.System = {

    ping: function( cb ){
      LetLife.request.basic('GET', '/ping', null, function(req, res){
        if(res.code!== 200) return cb( new LetLife.ApiError(req, res) );

        return cb( null, res.body);
      });
    }

}
