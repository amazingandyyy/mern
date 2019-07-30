import token from '../util/token';
import UserModel from '../user/model';

export default {
    signup : (req, res, next) => {
        const { email, password, firstName, lastName } = req.body;
    
        if (!email || !password) {
            return res
                .status(422)
                .send({error: 'You must provide email and password.'});
        }
        UserModel
            .findOne({
                email: email
            }, function (err, existingUser) {
                if (err) return res.status(422).send(err);
                if (existingUser) {
                    return res
                        .status(422)
                        .send({error: 'Email is in use'});
                }
                const user = new UserModel({
                    name: {
                        first: firstName, 
                        last: lastName
                    },
                    email: email,
                    password: password
                })
    
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
        UserModel
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
    }
}
