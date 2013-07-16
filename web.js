var express = require('express');
var app = express.createServer(express.logger());

var fs = require('fs');
var buf = new Buffer(5000);
var infile = "index.html";

buf = fs.readFileSync(infile);
var out = buf.toString('utf-8',0,buf.length);

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
