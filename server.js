var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function() {
});
app.use(express.static('public'));

app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    sesave: false,
    saveUninitialized: true
}));

var router = require('./router/main')(app, fs);

