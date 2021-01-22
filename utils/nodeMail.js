var nodemailer = require("nodemailer");
const requestHandler = require("./requestHandler");
const server = require("../api/server");
const { usersToken } = require("./generateToken");
require("dotenv").config();
const winston = require("../config/winston");

const username = process.env.USER;
const password = process.env.PASS;
const host = process.env.HOST;

var transporter = nodemailer.createTransport({
  name: "walletadvisor.ng",
  host: host,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: username, // your domain email address
    pass: password, // your password
  },
});

module.exports = class NodeMailer {
  /**
   * Send password reset token to users email
   * @param {string} token
   * @param {string} email
   */
  static async forgotPassword(res, statusCode, info, user) {
    const token = usersToken(user);
    server.locals = token;
    var mailOptions = {
      from: username,
      to: user.email,
      subject: "Password Reset",
      text: `You recently requested to reset your password. If this wasn't you, please ignore this mail.To reset your password click the button below
      ${process.env.REDIRECT_URL}/resetPassword`,
    };
    requestHandler.success(res, statusCode, info, token);
    winston.info(token);

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(
          "Reset Password Email link sent successfully: " + info.response
        );
      }
    });
  }

  /**
   * Send success message if password reset is successful
   * @param {string} email
   */
  static async resetPassword(res, statusCode, info, email) {
    var mailOptions = {
      from: username,
      to: email,
      subject: "Password Reset",
      text: `Your password was reset succesfully.You can now login to your account again.
      ${process.env.REDIRECT_URL}/login`,
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Password Reset Successful" + info.response);
      }
    });
    requestHandler.success(res, statusCode, info);
  }

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
      subject: "Verify Email",
      text: `Welcome To WalletAdvisor, Your No. 1 investment advisory platform. To verify your email please click the following ink 
        ${process.env.REDIRECT_URL}/${action}?verified=true`,
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
};
