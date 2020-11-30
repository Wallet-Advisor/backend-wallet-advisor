var nodemailer = require('nodemailer');
const requestHandler = require('./requestHandler');
const server = require('../api/server');
const { usersToken } = require('./generateToken');
require('dotenv').config()




const username = process.env.USER;
const password = process.env.PASS;
const host = process.env.HOST

var transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: username, // your domain email address
      pass: password // your password
    }
  });





module.exports = class NodeMailer {
      /**
   * Send email to confirm users email
   * @param {string} token
   * @param {string} email
   */
   static async confirmEmail(user, action) {
    const token = usersToken(user);
    server.locals = token;
     var mailOptions = {
        from: username,
        to: user.email,
        subject: 'Verify Email',
        text:  `Welcome To WalletAdvisor, Your No. 1 investment advisory platform. To verify your email please click the following ink 
        ${process.env.REDIRECT_URL}/${action}?verified=true`,
      };
 
     transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
   }



};