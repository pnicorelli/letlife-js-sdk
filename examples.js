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

lfSDK.config({
    basicAuthUser: "test-oauth-client",
    basicAuthPassword: "test-oauth-client",
})


var system = lfSDK.System;

system.ping(function(res){
  console.log("ping says: "+res);
});

var account = lfSDK.Account;

account.emailExists("p.sw@gmail.com", function(res){
  console.log("p.sw@gmail.com exists: "+res);
});

account.emailExists("p.nicorelli@gmail.com", function(res){
  console.log("p.nicorelli@gmail.com exists: "+res);
});
