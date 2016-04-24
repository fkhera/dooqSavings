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
		
	//bcc: "farooq.khera@gmail.com, JKaravak@gmail.com, rfidler78@gmail.com, nkaravakis@gmail.com, Athekdi@asu.edu, bmgraham36@gmail.com  ", // list of receivers
	//to: farooq.khera@gmail.com
	
	var mailOptions = {
    from: "Dooq Savings <dooqsavings@gmail.com>", // sender address
    bcc: "farooq.khera@gmail.com, sfatima87@gmail.com, JKaravak@gmail.com, rfidler78@gmail.com, nkaravakis@gmail.com, bmgraham36@gmail.com, Richardlrowan@gmail.com, manches32@yahoo.com, dolicus@gmail.com, eragonpool@gmail.com, michaelderemer03@gmail.com, Colin.juillard@gmail.com, Rpmgolden66@gmail.com, johnbrianslater@gmail.com",
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
