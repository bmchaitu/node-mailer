var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
 var smtpTransport = nodemailer.createTransport({
 	service:'Gmail',
 	auth:{
 		//xoauth2: xoauth2.createXOAuth2Generator({
 		//
    user : 'budagavichaitu@gmail.com',
 		pass : PASSWORD,
 		}
 	//}
 });
  var mailOptions = {
  	from : 'budagavichaitu@gmail.com',
  	to : 'hemabasavaraj.459@gmail com',
  	subject : "Testing mail",
  	text : "Hello World",
  	html : "<h1>HelloWorld</h1>"
  };

  smtpTransport.sendMail(mailOptions,(error,response) => {
  	if(error)
  	console.log('Error'+error.message);
  	else
  	console.log('success'+response.message);
  });
