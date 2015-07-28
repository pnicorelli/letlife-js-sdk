/**
 * User
 *
 *
 */
var LetLife = require("../letlife");

LetLife.User = {

    /**
     * Check if the email exists on the server
     * @param  {string}   email
     * @return  {Function} cb( boolean )  true if email exists, false otherwise
     */
    info: function( cb ){
      LetLife.request.bearer('GET', '/v1/user', null, function(req, res){
        if(res.code!== 200) throw new LetLife.ApiError(req, res);

        return cb(res.body);
      });
    }
}
