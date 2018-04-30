const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// INIT EXPRESS
const app = express();


//CONNECT TO MONGODB --> DATABASE = ninjago
mongoose.connect('mongodb://localhost/ninjago');
    // ES6 Syntax, make global
mongoose.Promise = global.Promise;


// BODY PARSER
app.use(bodyParser.json());


// INITIALIZE ROUTES TO api/ ROUTE
app.use('/api' , require('./routes/api'));


// LISTEN TO PORT
app.listen(process.env.port || 4000, ()=>{
    console.log('Listening to port 4000');
});








