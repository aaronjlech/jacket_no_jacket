const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
mongoose.Promise = require('bluebird');

// insert mongo db to use
// mongoose.connect('mongodb://localhost:27017/jacket');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send("Hello World");
});

const port = 5000;
app.listen(port, () => {
   //should see these console loggin in the terminal
   console.log("server is running!");
   console.log('listening at port: ', port);
});