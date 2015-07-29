var config = require('config');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('LetLife SDK loader', function() {

    it('should instantiate the SDK', function(done){
        var LetLife = require('../index');
        LetLife._option.apiUrl.should.be.equal(config.apiUrl);
        return done();
    });

    it('should customize the SDK config', function(done){
        var LetLife = require('../index');
        LetLife.config({
            apiUrl: '/efil.tel.ipa//:sptth',
            basicAuthUser: 'esrever'
        });
        LetLife._option.apiUrl.should.be.equal('/efil.tel.ipa//:sptth');
        LetLife._option.basicAuthUser.should.be.equal('esrever');
        LetLife._option.basicAuthPassword.should.be.equal(config.basicAuthPassword);
        return done();
    });

});
