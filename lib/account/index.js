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
    },

    /**
     * Register a new user
     * @param  {[object]} payload   a valid user object
     *
     * return the `access_token`
     */
    signup: function(payload, cb){
      var data = {
        email: payload.email,
        password: payload.password,
        phoneNumber: payload.phoneNumber || "",
        first: payload.first || "",
        last: payload.last || "",
        gender: payload.gender || "",
        avatar: payload.avatar || "",
        termsConditions: payload.termsConditions || false,
        nda: payload.nda || false,
        privacy: payload.privacy || false,
      }
      LetLife.request.basic('POST', '/v1/signup', data, function(req, res){
        if(res.code!== 200) return cb( new LetLife.ApiError(req, res), null );

        return cb( null, res.body.result.access_token);
      });
    }
}
