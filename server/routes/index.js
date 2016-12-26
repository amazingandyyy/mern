const express = require('express');
const router = express.Router();
const Authentication = require('../controllers/authentication');

router.post('/signup', Authentication.signup);
router.post('/signin', Authentication.signin);

module.exports = router;