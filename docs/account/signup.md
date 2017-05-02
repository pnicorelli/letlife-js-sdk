### Signup

Signup a user

`.signup(userdata, callback( error, result ) )`

userdata is an object with properties:

  - email: the user email
  - password: The user password
  - first: First name
  - last: Last name
  - gender: single char gender M/F
  - termsConditions: boolean (if user accept the terms & conditions)
  - nda: boolean (if user accept the nda)
  - privacy:  (if user accept the privacy)

usage example

```js
var account = LetLife.Account;

var signupData = {
  email: "test@email.com",
  password: "goodpassword",
  first: "name",
  last: "surname",
  gender: "M",
  termsConditions: true,
  nda: true,
  privacy: true
};

account.signup(signupData, function(err, access_token){
  console.log("your token is: "+access_token);
}
```
