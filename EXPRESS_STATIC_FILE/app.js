var express = require('express');
const path = require('path');
var app = express();

app.get('/', function(req,res) {
res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', function(req,res) {
    res.sendFile(path.join(__dirname, 'index.html'));
    });

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});


app.get('/', function(req,res) {
res.sendFile( 'index.html');
});    


