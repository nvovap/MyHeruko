
/**
 * Module dependencies.
 */

var express = require('express'); // 1
var app = express(); // 2
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) { // 3
        res.send('hello world'); //4
        });