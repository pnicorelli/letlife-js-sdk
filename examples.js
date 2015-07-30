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

var llSDK = require("./index");

var user = llSDK.User;

user.info()
  .then(function( res ){
    console.log(res)
  }).catch( function(err){
    console.log( err.getMessage() );
  });
