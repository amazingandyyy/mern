const router = require('express').Router();

router.get('/', function(req, res){
    console.log(req.user)
    res.send({status: 'connected'});
})

export default router;