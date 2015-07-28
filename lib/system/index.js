/**
 * SystemAPI
 *
 * 
 */
var LetLife = require("../letlife");

LetLife.System = {

    ping: function( cb ){
      LetLife.request.basic('GET', '/ping', null, function(code, body){
        if(code!== 200) throw new Error('/ping reply with status code '+code);

        return cb(body);
      });
    }

}
