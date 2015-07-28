var config = require('config');

var LetLife = {
  _option: config,

  // constructor
  LetLife: function(  ){

  },

  // util functions
  util:   require('./util'),

  // merge default configuration with arguments
  config: function( userConf ){
    this._option = this.util.merge(this._option, userConf);
    return this;
  }
};

module.exports = LetLife;

require('./request');
require('./system/');
require('./account/');
