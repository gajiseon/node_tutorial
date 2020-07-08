var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
});
mongoose.connect('mongodb://localhost:27017/mongodb_tutorial',{useNewUrlParser: true});

var Book = require('./models/book');
var router = require('./router/main')(app, Book);
var server = app.listen(port, function() {
});
