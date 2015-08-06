var LetLife = require("./letlife");

var ApiError = function(request, response) {
    this.name = "ApiError";
    this.statusCode = response.code;
    this.method = request.method;
    this.endpoint = request.path;
    this.body = response.body;
    this.message = '['+request.method+' '+request.path+'] - ';
    this.message = this.message + response.code +' - ';
    this.message = this.message + JSON.stringify(response.body);
    return this;
}

ApiError.prototype.getMessage = function(){
  return this.message;
}

LetLife.ApiError = ApiError;
