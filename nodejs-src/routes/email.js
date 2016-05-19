var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var options = {
	service: 'gmail',
	auth: {
        user: "",
        pass: ""
    }
}

var transporter = nodemailer.createTransport(smtpTransport(options))



exports.sendEmail = function(companyName, value, percent, link)
{
	var timestamp = (new Date).toISOString().replace(/z|t/gi,' ');
	
	var text = "Current Percent Found: " + percent + "% <br>" +
		"Current Value: " + value + "<br>" +
		"Follow Link: " + link + "<br>";
		
	var mailOptions = {
    from: "[add from email here]", // sender address
    bcc: "[add emails here]",
 // list of receivers
    /*to: "farooq.khera@gmail.com",*/
    subject: "Alert deal found for " + companyName + " " + percent + "%", // Subject line
    text: text,
    html: text
	};
	
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    transporter.close(); // shut down the connection pool, no more messages
});
};
