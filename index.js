const express = require('express');
const logger = require('morgan');
const router = require('./src/routes/Routes') ;
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration

const app = express();
app.set('secretKey', 'nodeRestApi'); // jwt secret token
// connection to mongodb


mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', router);


app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.log(err);
 
    if(err.status === 404)
        res.status(404).json({message: "Not found"});
    else 
        res.status(500).json({message: "Something looks wrong :( !!!"});
});
app.listen(3000, function(){
    console.log('Node server listening on port 3000');
});