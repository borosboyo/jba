var express = require('express')
var app = express()

app.use(express.static('static'))

var server = app.listen(3000, function () {
    console.log('Running on :3000');
});