## HTML Example

A working example to retrieve an accessToken for a valid user on the system

```html

<html>
  <head>
    <script src="./letlifeSDK.js" type="text/javascript"></script>
  </head>

  <body>
  <div id="accessToken">
  ...loading
  </div>

    <script>
	LetLife.config({
		"apiUrl":"http://localhost:9000",
		"basicAuthUser": "test-oauth-client",
		"basicAuthPassword": "test-oauth-client"
	});
    LetLife.Account.authToken("existent@user.com", "password", function(err, result){
		var div = document.getElementById("accessToken");

		if(err){
			div.innerHTML = "Error:"+err.getMessage();
		} else {
			div.innerHTML = result.access_token;
		}

	});
    </script>
  </body>

</html>
```

Quite easy: after the page has load the lib
```html
<script src="./letlifeSDK.js" type="text/javascript"></script>
```

an object `LetLife` give you the full SDK access.
