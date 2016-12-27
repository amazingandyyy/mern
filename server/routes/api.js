const express = require('express');
const router = express.Router();

const middlewares = require('./middlewares');

router.get('/', function(req, res){
    console.log(req.user)
    res.send({status: 'connected'})
})

module.exports = router;