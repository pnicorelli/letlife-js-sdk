### ping

Check if the system is up.

```js
var LF = require("letlife-js-sdk");

LF.config({
    basicAuthUser: 'valid-user',
    basicAuthPAssword: 'valid-pass'
})

var req = new LF.System();

req.ping().then( function(res){
    console.log("Ping call says: "+res)
});
```
