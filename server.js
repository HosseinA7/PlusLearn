const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
global.config = require('./config');
const app = express();

// Connect to DB
mongoose.connect('mongodb://localhost:27017/pluslearn', {useNewUrlParser: true});
//app.use(expressValidator())
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));
app.use('/public' , express.static('public'))

const Router = require('./modules/routes/index.js');

app.use('/' , Router);

app.listen(config.port , () => {
    console.log(`Server is running at Port ${config.port}`)
}); 