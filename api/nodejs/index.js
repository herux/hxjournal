const path = require('path');
global.CONFIG = require(path.resolve('./config/config.json'));

var express = require('express');
var app = express();
var mongoose = require('mongoose');
const { host, port, database } = CONFIG.mongo;
mongoose.connect(`mongodb://${host}:${port}/${database}`);

const coaRoute = require('./app/routers/coa');
const journalRoute = require('./app/routers/journal');

app.use('/apis/v1/coa', coaRoute);
app.use('/apis/v1/journal', journalRoute);
app.use(function (req, res, next) {  
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var httpPort = process.env.PORT || 3030;
app.listen(httpPort);
console.log('Go to https://localhost:' + httpPort);