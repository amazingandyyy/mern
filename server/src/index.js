import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from './util/logger';
import config from './config';
import Middlewares from './api/middlewares'
import Authentication from './api/authentication'
import UserRouter from './user/router'

if(!process.env.JWT_SECRET) {
    const err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/amazingandyyy/mern#prepare-your-secret');
    logger.warn(err.message);
}

const app = express();

mongoose.connect(config.mongoose.uri, { useNewUrlParser: true, useUnifiedTopology: true })
.catch(err=>console.error(err));

mongoose.Promise = global.Promise;

// App Setup
app.use(cors({
    origin: ['https://www.amazingandyyy.com', 'http://localhost:3000', 'http://localhost:1234']
}));
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.get('/ping', (req, res) => res.send('pong'))
app.get('/', (req, res) => res.json({'source': 'https://github.com/amazingandyyy/mern'}))
app.post('/signup', Authentication.signup)
app.post('/signin', Authentication.signin)
app.get('/auth-ping', Middlewares.loginRequired, (req, res) => res.send('connected'))
app.use('/user', Middlewares.loginRequired, UserRouter)

app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(422).json(err.message);
});

// Server Setup
const port = process.env.PORT || 8000
app.listen(port, ()=>{
    logger.info(`Server listening on: ${port}`)
});
