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

// var llSDK = require("./index");
//
// var account = llSDK.Account;
//
// account.emailExists("p.sw@gmail.com")
//   .then( function(res){
//     console.log("p.sw@gmail.com exists: "+res);
//     return account.emailExists("p.nicorelli@gmail.com");
//   }).then( function(res){
//     console.log("p.nicorelli@gmail.com exists: "+res);
//   });
// account.authToken("p.nicorelli@gmaail.com", "password")
//   .then(function( res ){
//     console.log(res)
//   }).catch( function(err){
//     console.log( err instanceof llSDK.ApiError)
//     console.log(err)
//   });
