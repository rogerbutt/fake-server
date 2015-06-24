var express = require('express');
var app = express();

app.post('/', function (req, res) {
	console.log(req.data);
});

var server = app.listen(3000, function() {
	
	var host = server.address().address;
	var port - server.address().portl
	
	console.log('Fake server listening at http://%s:%s', host, port);
	
});