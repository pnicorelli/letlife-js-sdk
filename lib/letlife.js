var config = require('../config/default.json');

var LetLife = {
  _option: config,

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
require('./account/');
require('./storage/');
require('./system/');
require('./user/');
