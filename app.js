var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist'));
var port = 9000;
app.listen(port);
console.log('server on ' + port);
