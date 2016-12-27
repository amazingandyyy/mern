const express = require('express');
const router = express.Router();

const Authentication = require('../controllers/authentication');
const middlewares = require('./middlewares');

router.use('/api', middlewares.loginRequired, require('./api'));
router.post('/signup', Authentication.signup);
router.post('/signin', Authentication.signin);
router.post('/checkToken/:token', Authentication.checkToken);

module.exports = router;