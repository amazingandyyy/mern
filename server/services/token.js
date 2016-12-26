const jwt = require('jwt-simple');
const config = require('../config');

module.exports = {
    generateToken: function (user) {
        const timeStamp = new Date().getTime();
        const payload = {
            sub: user.id,
            iat: timeStamp
        }
        return jwt.encode(payload, config.secret);
    },
    test: function(){
        console.log('hello yo!')
    }
}