/**
 * User
 *
 *
 */
var LetLife = require("../letlife");

LetLife.User = {

    /**
     * Get the user data
     */
    info: function( cb ){
      LetLife.request.bearer('GET', '/v1/user', null, function(req, res){
        if(res.code!== 200) return cb( new LetLife.ApiError(req, res) );

        return cb( null, res.body.user);
      });
    }
}
