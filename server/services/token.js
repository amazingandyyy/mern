import jwt from 'jwt-simple';
import config from '../config';

export default {
    generateToken: function (user) {
        console.log('generateToken');
        const timeStamp = new Date().getTime();
        const payload = {
            sub: user.id,
            iat: timeStamp
        }
        return jwt.encode(payload, config.jwt_secret);
    },
    verifyToken: function (token, cb) {
        console.log('verifyToken');
        const decode = jwt.decode(token, config.jwt_secret)
        if (!decode) return cb({ error: 'Token is not verified.' });
        cb(null, decode);
    }
}