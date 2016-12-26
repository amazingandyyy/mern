const express = require('express');
const http = require('http');
const bodyParder = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

// DB Setup
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/auth'
mongoose.connect(MONGOURL, err => {
        console.log(err || `Connected to MongoDB: ${MONGOURL}`);
    });

// App Setup
app.use(morgan('dev'));
app.use(bodyParder.json({type: '*/*'}));
app.use('/', require('./routes/index'));

// Server Setup
const port = process.env.PORT || 8080
http.createServer(app).listen(port);
console.log(`Server listening on: ${port}`)
