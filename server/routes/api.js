const express = require('express');
const router = express.Router();

const middlewares = require('./middlewares');

router.post('/', function(req, res){
    console.log(req.user)
    res.send('ok')
})

module.exports = router;