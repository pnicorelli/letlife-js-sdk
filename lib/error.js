var LetLife = require("./letlife");

function ApiError(request, response) {
  this.name = "ApiError";
  this.message = '['+request.method+' '+request.url+'] says '+response.code+' - '+response.body.toString();
  //const err = Error( this.message );
  Error.captureStackTrace(this,arguments.callee);
  // this.stack = err.stack;
};

// ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype = new Error();
ApiError.prototype.constructor = ApiError;


LetLife.ApiError = ApiError;
