/**
 * StorageAPI
 *
 *
 */
var LetLife = require("../letlife");

LetLife.Storage = {

    getPresigneURL: function( reference, cb ){
      LetLife.request.bearer('GET', '/v1/storage/presignedurl/write', {refId: reference, ext:'jpg', cType: 'image/jpg'}, function(req, res){
        if(res.code!== 200) return cb( new LetLife.ApiError(req, res) );

        return cb( null, res.body.result);
      });
    }

}
