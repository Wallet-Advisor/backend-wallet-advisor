const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const requestHandler = require("../utils/requestHandler");
const db = require("../models/authModel");
const Mailer = require("../utils/mailer");
// const sendMail = require("../utils/sendMail");

const register = (req, res) => {
  try {
    const newUser = req.newuser;
    const { email } = req.body;
    Mailer.confirmEmail(newUser, email, `login`);
    generateToken(
      res,
      201,
      "You are successfully signed up to wallet advisor",
      newUser
    );
  } catch (err) {
    return requestHandler.error(res, 500, `server error ${err.message}`);
  }
};

const login = (req, res) => {
  // login endpoint
  try {
    const payload = req.checked;
    if (payload.verified) {
      generateToken(res, 200, "Login succesful", payload);
    } else {
      Mailer.confirmEmail(payload, `login`);
      generateToken(
        res,
        200,
        `Login succesful. Email not verified.
        An email verification message has been sent to this email.`,
        payload
      );
    }
  } catch (err) {
    return requestHandler.error(res, 500, `server error ${err}`);
  }
};

const passwordReset = async (req, res) => {
  try {
    const user = req.checked;
    return Mailer.forgotPassword(
      res,
      200,
      "A reset password token has been sent to this email",
      user
    );
  } catch (err) {
    return requestHandler.error(res, 500, `server error ${err}`);
  }
};

const newPassword = async (req, res) => {
  try {
    const id = await req.token;
    if (id) {
      const { password } = req.body;
      const hash = await bcrypt.hash(password, 15);
      const foundUser = db.getSingleUser({ id });
      if (foundUser) {
        await db.updateUser({ password: hash }, id);
        return Mailer.resetPassword(
          res,
          200,
          "Your Password Has Been Updated Successfully",
          foundUser.email
        );
      }
    }
    return requestHandler.error(res, 400, `reset password token not available`);
  } catch (err) {
    return requestHandler.error(res, 500, `server error ${err}`);
  }
};

const confirmEmail = async (req, res) => {
  try {
    const id = await req.token;
    if (id) {
      const foundUser = await db.getSingleUser({ id });
      if (foundUser) {
        await db.confirmEmail(id);
        return generateToken(
          res,
          200,
          `User with email ${foundUser.email} has been verified`,
          { id }
        );
      }
    }
    return false;
  } catch (err) {
    return requestHandler.error(res, 500, `server error ${err}`);
  }
};

module.exports = {
  register,
  login,
  passwordReset,
  newPassword,
  confirmEmail,
};
