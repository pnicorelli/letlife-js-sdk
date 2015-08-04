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
//
// var llSDK = require("./index");
// llSDK.config({
//   basicAuthUser: 'test-oauth-client',
//   basicAuthPassword: 'test-oauth-client'
// })
// var user = llSDK.System;
//
// user.ping().then( function(res){
//   console.log(res)
// }).catch( function(err){
//   console.log(err)
// });

// user.authToken('p.nicorelli@gmail.com', 'password')
//   .then(function( res ){
//     console.log(res)
//   }).catch( function(err){
//     console.log( err.getMessage() );
//   });

var http = require('https');
var url = require('url');

var postData = '';

var options = {
  hostname: 'api-ssl2.let.life',
  port: 443,
  path: '/ping',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
console.log(req)
req.write(postData);
req.end();
