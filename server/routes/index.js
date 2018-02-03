import Authentication from '../controllers/authentication';
import Middlewares from './middlewares';
import api from './api';

const router = require('express').Router();

router.use('/api', Middlewares.loginRequired, api);
router.post('/signup', Authentication.signup);
router.post('/signin', Authentication.signin);
router.post('/checkToken/:token', Authentication.checkToken);

export default router;