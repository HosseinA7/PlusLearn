const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const expressValidator = require('express-validator');
global.config = require('./config');

// Connect to DB
mongoose.connect('mongodb://localhost:27017/pluslearn', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));

app.use('/public' , express.static('public'))

const Router = require('./modules/routes/index.js');

app.use('/' , Router);

app.listen(config.port , () => {
    console.log(`Server running at Port ${config.port}`)
}); 