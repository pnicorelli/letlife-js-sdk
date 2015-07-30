# pre-pre-pre Alpha release

>LetLife API sdk for javascript

[![Build Status](https://travis-ci.org/pnicorelli/letlife-js-sdk.svg)](https://travis-ci.org/pnicorelli/letlife-js-sdk)


## Install

```shell
npm install --save letlife-js-sdk
```

## Usage

The letlife-js-sdk uses promises to allow for asynchronous workflows, and this asynchronicity allows HTTP requests to be sent concurrently. The promise specification used by the SDK is [kriskowal/q](http://documentup.com/kriskowal/q/#)

```js
var LF = require('letlife-js-sdk');
LF.config({
  basicAuthUser:"test-oauth-client",
  basicAuthPassword:"test-oauth-client"
});
account = LF.Account;

account.emailExists("p.nicorelli@gmail.com")
  .then( function( response ){
    console.log(response);
  }).catch( function( err ){
    console.log(err)
  });

```
## APIs

- [System](./docs/system.md) related functions
- [Account](./docs/account.md) related functions
