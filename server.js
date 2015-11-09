var express = require('express');
var routes = require('./routes.js');

var server = express();
routes(server);

server.use(express.static('assets'));

var port = 9876;

server.listen(port, function () {
  console.log('Server listening at localhost: ', port);
});