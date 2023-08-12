//Create a web server
const express = require('express');
const app = express();
const port = 3000;

//Require the body-parser library. Will be used to parse the body of the incoming requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Require the mongoose library
const mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

