const express = require('express');
const router = express.Router();
const Authentication = require('../controllers/authentication');

router.post('/signup', Authentication.signup);

module.exports = router;
