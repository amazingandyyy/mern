const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('connected');
})

router.get('/userProfile', (req, res)=>{
    res.send(req.user);
})

router.post('/userProfile', (req, res)=>{
    res.send(req.user);
})

export default router;