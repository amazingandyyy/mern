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
    verifyToken: function (token, cb) {
        const decode = jwt.decode(token, config.secret)
        if (!decode) {
            return cb({error: 'Token is not verified.'})
        }

        cb(null, decode)
    }
}