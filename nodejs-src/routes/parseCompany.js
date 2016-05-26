var request = require('request');
var cheerio = require('cheerio');

var email = require('./email');
var alertFound = false;
var currentValue = null;
var currentPercent = null;
var previousValue = null;

var cache = require('node-persist');
cache.initSync();

var noDealFound = true;

exports.parse = function(companyInformation)
{
	var $ = require('jquerygo');
	var localDealFound = false;

	var threshold = companyInformation.percent;
        var companyName = companyInformation.name;
	var url = companyInformation.url;

	var noDealFoundCache = cache.getItem(companyName);
	if(noDealFoundCache == undefined)
	{
		noDealFound = true;
	}
	else
	{
		noDealFound = cache.getItem(companyName);
	}
	console.log('current no deal found status: ' + noDealFound);
	
	

	
	
	
	$.visit(url, function() {
  $.waitForPage(function() {
  
		// Get the title that was set. 
		$('.toggle-details > .right').each(function(index, element, done) {
			
			
		  element.text(function(name) {
			  

			if(name.charAt(0) == '$')
			{
				console.log("Found value: " + name);
				currentValue = name;
			}
			else if(name.indexOf("%") > -1)
			{
				var percent = name.substring(0, name.length -1);
				console.log("Found percent: " + percent);
				currentPercent = percent;
				if(percent > threshold)
				{
					localDealFound = true;
				}
				
				if(percent > threshold && noDealFound)
				{
					console.log('Alert found matching percent: ' + percent);
					console.log("sending email...");
					console.log("current value: " + currentValue);

					var numberValue = currentValue.substring(1);
					numberValue = parseFloat(numberValue);

					if(numberValue>20 && numberValue < 5000)
					{
						email.sendEmail(companyName, currentValue, currentPercent, url);
					
						//previousValue = currentValue;
						noDealFound = false;
						cache.setItem(companyName, noDealFound);
					}
				}
			}
			
			done();
		  });
		  
		  
		  
	  
		}, function() {
	
	  console.log('Done Parsing: ' + companyName);
	  console.log('Done Parsing URL: ' + url);
	  
    
      // We are done. 
      //console.log('Next loaded!');
	  //done();
	  
	  //If in a single run, we find no matches, then we need to reset our noDealFound to be true.
	  if(localDealFound == false)
	  {
		  noDealFound = true;
		  //previousValue = null;
                  cache.setItem(companyName, noDealFound);
	  }

	  
      $.close();
	  delete require.cache[require.resolve('jquerygo')]
	  //process.exit();
	  //clearInterval(timerId);
	  return;
       });

  });
});
 

}
	

	
