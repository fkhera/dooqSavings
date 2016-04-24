var express = require('express');
var http = require('http');
 
var app = express();
var name = '/macys';
 
var companyTemplate = require('./companyTemplate');
 
var companyInformation = companyTemplate.companyInformationMap[name];
 
app.get(name, function(req, res) {
	
		var parse = require('./routes/parseCompany');
		setInterval(function() {
			parse.parse(companyInformation);
		}, companyTemplate.timerDelay);
		
		res.send('timing program: ' + name);
		
});

 
app.listen(companyInformation.port);
console.log('Listening on port ' + companyInformation.port + '...');

var options = {
  host: 'localhost',
  port: companyInformation.port,
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
