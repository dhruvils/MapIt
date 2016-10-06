const rootdir = './';
const port = 8080;
const hostname = '127.0.0.1';

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(rootdir));

http.listen(port, function() {
	console.log('listening on : ' + port);
});

app.get('/testget', function (request, response) {
	response.statusCode = 200;
	response.setHeader('content-type', 'text/html');
	response.end('Hello World!!\n');
});
