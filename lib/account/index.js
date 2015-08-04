/**
 * Account
 *
 *
 */
var LetLife = require("../letlife");

LetLife.Account = {

    /**
     * Check if the email exists on the server
     * @param  {string}   email
     * @return  {Function} cb( boolean )  true if email exists, false otherwise
     */
    emailExists: function( email, cb){
      LetLife.request.basic('GET', '/v1/email_exists/'+email, null, function(req, res){
        if(res.code!== 200) return cb( new LetLife.ApiError(req, res) );

        return cb( null, res.body.result);
      });
    },

    /**
     * Get a new access_token
     * @param  {[type]} email    a valid username on LetLife
     * @param  {[type]} password
     */
    authToken: function(email, password, cb){
      var data = {
        grant_type: 'password',
        username: email,
        password: password
      }
      LetLife.request.basic('POST', '/auth/token', data, function(req, res){
        if(res.code!== 200) return cb( new LetLife.ApiError(req, res) );

        return cb( null, res.body);
      });
    }
}
