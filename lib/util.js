var _ = require("underscore");

var util = {

    /*
    * Merge obj2 into obj1 and return it
    */
    merge: function(obj1, obj2){
        return _.extend(obj1, obj2);
    },

    /*
    * Merge obj props and methods
    */
    inherit: function(object){
        return _.extend(this, object);
    }
};

module.exports = util;
