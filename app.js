var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q);
    var filename = "." + q.pathname;
    console.log(filename);
   
  
    fs.readFile(filename, function(err, data) {
  
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<a href='./home.html'>Home</a>");
      res.write("<a href='./about.html'>About us</a>");
      res.write(data);
      
      return res.end();
    });
  }).listen(8080);