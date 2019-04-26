import UserController from './controller';

const router = require('express').Router();

router.get('/profile', (req, res)=>{
    res.send(req.user);
})

router.post('/profile', UserController.updateProfile)

export default router;