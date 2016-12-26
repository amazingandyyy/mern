const express = require('express');
const router = express.Router();

const Authentication = require('../controllers/authentication');
const middlewares = require('./middlewares');

router.get('/', middlewares.loginRequired, function(req, res){
    console.log(req.user)
    res.send('ok')
})
router.post('/signup', Authentication.signup);
router.post('/signin', Authentication.signin);

module.exports = router;