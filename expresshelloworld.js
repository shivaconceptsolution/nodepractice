var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
    res.send('Welcome to JavaTpoint!');  
  }); 
  app.get('/xyz', function (req, res) {  
    res.send('ssssss');  
  }); 
  var server = app.listen(8000, function () {  
    var host = server.address().address;  
    var port = server.address().port;  
    console.log('Example app listening at http://%s:%s', host, port);   

  })