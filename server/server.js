require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

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
app.use('/', require('./routes/index'));

// Server Setup
const port = process.env.PORT || 8000
http.createServer(app).listen(port);
console.log(`Server listening on: ${port}`)
