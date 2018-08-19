//Importing modules
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path'); //core module

var app = express();

var route = require('./routes/route');

//Port no
const port = 3000;

//Mongodb connection (Local)
const dbStr = 'mongodb://127.0.0.1:27017';
mongoose.connect(dbStr);

//Successful db connection
mongoose.connection.on('connected', () => {
  console.log(`Db Connected @ ${dbStr}`);
});

//Unsuccessful db connection
mongoose.connection.on('error', (err) => {
  if (err) {
    console.log(`Error occurred while making Db Connection ${err}`);
  }
});

//Adding middleware - cors
app.use(cors());

//Body parser
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api', route);

//Testing server
app.get('/', (req, res) => {
  res.send('I am working');
});

//Initialising the server
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});