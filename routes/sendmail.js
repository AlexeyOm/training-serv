var nodemailer = require('nodemailer');

exports.index = function(req, res){

	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport('smtps://alexey.omelchenko%40gmail.com:BussyK@t@smtp.gmail.com');

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: '"Alexey Omelchenko" <alexey.omelchenko@gmail.com>', // sender address
	    to: 'a@omelchen.co, alexey@omelchen.co', // list of receivers
	    subject: 'Hello test', // Subject line
	    text: 'Hello world ?', // plaintext body
	    html: '<b>Hello world ?</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});


	res.json('sent');
};