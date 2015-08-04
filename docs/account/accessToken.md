### Access Token

get the access_token for `username` and `password`

`.authToken( username, password, callback( error, result ) )`


usage example

```js
var account = LetLife.Account;

account.authToken("loki@asgard.gov", "ragnarok", function(err, result){
  console.log("your token is: "+result.access_token);
}
```

result example

```json
{
    "access_token": "2062r4n514iujxjust144ht12ulh3nj69p85hpd8",
    "refresh_token": "j9kh3eadc89yb6w643t7ntyltp00qq2xeovi4wlr",
    "token_type": "Bearer"
}
```
