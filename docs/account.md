### emailExists

Check if a email address is already present


```js
var lfSDK = require("letlife-js-sdk");

lfSDK.config({
    basicAuthUser: 'valid-user',
    basicAuthPAssword: 'valid-pass'
});

var account = lfSDK.Account;

account.emailExists("p.sw@gmail.com", function(res){
  console.log("p.sw@gmail.com exists: "+res);
});

account.emailExists("p.nicorelli@gmail.com", function(res){
  console.log("p.nicorelli@gmail.com exists: "+res);
});
```
