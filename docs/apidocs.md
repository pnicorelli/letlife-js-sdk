### Account Services

all the function require a valid **basicAuthUser** and **basicAuthPassword** config.

```js
var LetLife = require('./index')
LetLife.config({
  "basicAuthUser": "valid-client-user",
  "basicAuthPassword": "valid-client-password"
})
var account = LetLife.Account;
```

- [Email Existence](./account/emailExists.md)
- [Access Token](./account/accessToken.md)
