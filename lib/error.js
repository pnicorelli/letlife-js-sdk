var LetLife = require("./letlife");

function ApiError(request, response) {
  this.name = "ApiError";
  this.statusCode = response.code;
  this.method = request.method;
  this.endpoint = request.url;
  this.body = response.body;
  this.message = '['+request.method+' '+request.url+'] - ';
  this.message = this.message + response.code +' - ';
  this.message = this.message + JSON.stringify(response.body);
};

LetLife.ApiError = ApiError;
