var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');


const url = new URL('../template', import.meta.url);
var serve = serveStatic(url);

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(8000);