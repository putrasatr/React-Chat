var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_chat', {useNewUrlParser: true, useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ApiRouter = require('./routes/api-chat');
const { endianness } = require('os');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', ApiRouter);


module.exports = app;


function delay(t, v) {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, v), t)
    });
 }
 
 Promise.prototype.delay = function(t) {
     return this.then(function(v) {
         return delay(t, v);
     });
 }
 
 
 Promise.resolve("hello").delay(1000).then(function(v) {
     console.log(v);
 });