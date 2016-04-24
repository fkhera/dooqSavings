var express = require('express');
var email = require('./routes/email');
var http = require('http');
 
var app = express();
var parse = require('./routes/parseBestbuy');
var name = '/bestbuy';
var port = 3004;
 
app.get(name, function(req, res) {
	
	//call this on loop
		setInterval(function() {
			parse.parse();
		}, 50000);
		res.send('timing program: ' + name);
	
});

 
app.listen(port);
console.log('Listening on port 3000...');

var options = {
  host: 'localhost',
  port: port,
  path: name,
  method: 'GET'
};


http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();

