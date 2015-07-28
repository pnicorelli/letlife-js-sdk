/**
 * Account
 *
 *
 */
var LetLife = require("../letlife");

LetLife.Account = {

    emailExists: function( email, cb ){
      LetLife.request.basic('GET', '/v1/email_exists/'+email, null, function(code, body){
        if(code!== 200) throw new Error('/ping reply with status code '+code);

        return cb(body.result);
      });
    }

}
