const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/userDetail';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.info(`database connected Successfully`)
}, (err) => { console.log(err); });


const userRouter = require('./routers/userRouter');

const port = 8080;
const hostname = 'localhost';

const app = express();
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// router call
app.use('/userDetail', userRouter);

app.use(express.static(__dirname + '/public'));

// Start the server
app.listen(port, hostname, () => console.info(`Server running at http://${hostname}:${port}`));
