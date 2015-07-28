// var lfSDK = require("./index");
//
// lfSDK.config({
//     basicAuthUser: '',
//     basicAuthPAssword: ''
// })
//
// var req = new lfSDK.System();
//
// req.ping( function(err, res){
//     if(err) throw err; // HTTP STATUS CODE + ERROR
//
//     console.log("Ping call says: "+res)
// });

var lfSDK = require("./index");

var account = lfSDK.Account;
var user = lfSDK.User;


  account.authToken("xxxx@xxxx.it", "password",  function(res){
    lfSDK.config({ "bearerToken": res.access_token});
    user.info( function(u){
      console.log(u);
    });
  });
