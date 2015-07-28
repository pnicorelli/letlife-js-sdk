### ping

Check if the system is up.

```js
var lfSDK = require("letlife-js-sdk");

lfSDK.config({
    basicAuthUser: 'valid-user',
    basicAuthPAssword: 'valid-pass'
})

var req = new lfSDK.System();

req.ping( function(res){
    console.log("Ping call says: "+res)
});

```
