### emailExists

Check if a email address is already present


```js
var LF = require("letlife-js-sdk");

LF.config({
    basicAuthUser: 'valid-user',
    basicAuthPAssword: 'valid-pass'
});

var account = LF.Account;

account.emailExists("p.sw@gmail.com")
  .then( function(res){
    console.log("p.sw@gmail.com exists: "+res);
    return account.emailExists("p.nicorelli@gmail.com");
  }).then( function(res){
    console.log("p.nicorelli@gmail.com exists: "+res);
  });

```


### access_token

get the access_token for `username` and `password`

```js
account.authToken("p.nicorelli@gmaail.com", "password")
  .then(function( res ){
    console.log(res)
  }).catch( function(err){
    console.log( err instanceof llSDK.ApiError)
    console.log(err)
  });
```
