### Email Exists

Check if a email address is already present

`.emailExists( email, callback( error, result ) )`

```js
var account = LetLife.Account;

account.emailExists("odin@asgard.gov", function( err, result){
  if( result ){
    console.log("yes, exists");
  } else {
    console.log("not found")
  }
});

```

`result` is boolean
