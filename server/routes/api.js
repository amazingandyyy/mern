const router = require('express').Router();

router.get('/userProfile', (req, res)=>{
    res.send(req.user);
})

router.get('/', (req, res)=>{
    res.send('connected');
})

export default router;