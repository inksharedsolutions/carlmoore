"use strict";

const express  = require('express');
const cors = require('cors');
const bodyParser   = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var smtpParser = function(){}
		
smtpParser.prototype.driver = function( __ef , specifier){
	
	const {user , pass } = __ef;
	var htmlMsg = specifier === 'contact' ? this.formData(__ef) : this.newsletterData(__ef);


	return new Promise ((res,  rej)=>{
		async function main(){
		  let testAccount = await nodemailer.createTestAccount();
		  let transporter = nodemailer.createTransport({
		    host: 'smtp.office365.com',
		    port: 587,
		    secure: false,
		    auth: {
		      user: user,
		      pass: pass
		    }
		  });

		  let info = await transporter.sendMail({
		    from: user, // sender Address
		    to: user, // list of receivers
		    subject: `${specifier.toUpperCase()} Form - Paul Mathias` , // Subject line
		    html : htmlMsg , // plain text body
		  });

		  console.log("Message sent: %s", info.messageId);
		  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		}

		main().catch(console.error);

	}).then((res)=>{
		console.log(res);
	}).catch((err)=>{
		console.log(err);
	})
}			

smtpParser.prototype.formData = function(formData) {
	const {name,  phone , email, address, message } = formData;
	return (`<h2>Contact Form</h2><p>Name: ${name}</p><p>Email: ${email}</p>
		    	<p>Phone: ${phone}</p><p>Address: ${address}</p><p>Message: ${message}</p>`);
}

smtpParser.prototype.newsletterData = function(nData){
	const {email} = nData;
	return (`<h2>Newsletter Form</h2><p>Paul Mathias Subcriber</p><p>Email: ${email}</p>`);
}


var  __smtpData = new smtpParser();

app.post('/formData', (req, res)=>{
	 //intializer drivers
	 __smtpData.driver( req.body , 'contact');
});
	
app.post('/newsletterData', (req, res)=>{
	//intializer drivers
	__smtpData.driver( req.body , 'newsletter');
});			



app.listen( 8000, ()=>{console.log('listening Port')});