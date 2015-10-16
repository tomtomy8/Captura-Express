//Awsome Captura Stuff!
var express = require("express");
var app = express();

app.get('/getcaptura', function(req, res) {
    res.send('Hello World!');
});