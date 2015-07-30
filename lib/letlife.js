var config = require('config');

var LetLife = {
  _option: config,

  // constructor
  LetLife: function(  ){
    _option = config;
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

require('./error');
require('./request');

/* apis */
require('./system/');
require('./account/');
require('./user/');
