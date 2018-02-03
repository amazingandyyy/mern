require('dotenv').config();

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import routers from './routes';

const app = express();

// DB Setup
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/auth';

if(!process.env.JWT_SECRET){
    mongoose.connect(MONGOURL, err => {
        console.error(err || `[WARNING] Connected to MongoDB: ${MONGOURL} with a explicited jwt_secret ---> please create a .env file and set a implicited JWT_SECRET`);
    });
}else{
    mongoose.connect(MONGOURL, err => {
        console.log(err || `Connected to MongoDB: ${MONGOURL}`);
    });
}

// App Setup
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routers);

// Server Setup
const port = process.env.PORT || 8000
http.createServer(app).listen(port, ()=>{
    console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
});
