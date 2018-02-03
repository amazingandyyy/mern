import token from '../services/token';
import User from '../models/user';

export default {
    signup : (req, res, next) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
    
        if (!email || !password) {
            return res
                .status(422)
                .send({error: 'You must provide email and password.'});
        }
        User
            .findOne({
                email: email
            }, function (err, existingUser) {
                if (err) {
                    return res.status(422).send(err)
                }
                if (existingUser) {
                    return res
                        .status(422)
                        .send({error: 'Email is in use'});
                }
                const user = new User({name: name, email: email, password: password})
    
                user.save(function (err, savedUser) {
                    if (err) {
                        return next(err)
                    }
    
                    res.json({
                        success: true,
                        token: token.generateToken(savedUser)
                    })
                })
            })
    },
    
    signin: (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            return res
                .status(422)
                .send({error: 'You must provide email and password.'});
        }
        User
            .findOne({
                email: email
            }, function (err, existingUser) {
                if (err || !existingUser) {
                    return res.status(401).send(err || {error: "User Not Found"})
                }
                if (existingUser) {
                    existingUser.comparedPassword(password, function(err, good) {
                        if (err || !good) {
                                return res.status(401).send(err || 'User not found')
                            }
    
                            res.send({
                                token: token.generateToken(existingUser)
                            })
                    })
                }
            })
    },
    
    checkToken: (req, res, next) => {
        const token = req.params.token;
        console.log('try this token: ', token)
        next()
    }
    
}
