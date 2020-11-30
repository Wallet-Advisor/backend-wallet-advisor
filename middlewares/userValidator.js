const bcrypt = require('bcrypt');
const decode = require('jwt-decode');
const checkItem = require('../utils/checkInputs');
const requestHandler = require('../utils/requestHandler');
const authModel = require('../models/authModel');
require('dotenv').config();
const server = require('../api/server');

module.exports = class UserValidator {
  static async userInput(req, res, next) {
    const { email, password, fullname } = req.body;
    const check = checkItem({
      email,
      fullname,
      password
    });
    if (Object.keys(check).length > 0) {
      return res.status(400).json({
        statusCode: 400,
        check
      });
    }
    const userEmail = await authModel.getUserBy({ email });
    let existingUser;
    if (userEmail !== undefined) {
      existingUser = `email ${email}`;
    }
    if (existingUser) {
      return requestHandler.error(
        res,
        409,
        `User with ${existingUser} already exist`
      );
    }
    const hash = await bcrypt.hash(password, 15);
    const newUser = await authModel.createUser({
      email,
      fullname,
      password: hash
    });
    req.newuser = newUser;
    next();
  }

  static async userLogin(req, res, next) {
    const { password, email } = req.body;
    try {
      const check = checkItem({
        email,
        password
      });
      if (Object.keys(check).length > 0) {
        return res.status(400).json({
          statusCode: 400,
          check
        });
      }
      const returnUser = await authModel.getUserBy({ email });

      if (returnUser && returnUser.password) {
        const checkPassword = await bcrypt.compareSync(
          password,
          returnUser.password
        );
        if (returnUser && checkPassword) {
          // eslint-disable-next-line require-atomic-updates
          req.checked = { email: returnUser.email, fullname: returnUser.fullname };
          next();
        }
      }

      return requestHandler.error(res, 400, "Incorrect login credentials");
    } catch (err) {
      return err;
    }
  }

  static async inviteInput(req, res, next) {
    try {
      const { email } = req.body;
      const { id } = req.params;
      const check = checkItem({
        email
      });
      if (Object.keys(check).length > 0) {
        return requestHandler.error(res, 400, check);
      }
      if (id) {
        next();
      }
      const checkUser = await authModel.getUserBy({ email });
      if (!checkUser || Object.keys(checkUser).length === 0) {
        return requestHandler.error(
          res,
          401,
          'This email is either incorrect or not registered'
        );
      }
      req.checked = { email: checkUser.email, id: checkUser.id };
      next();
    } catch (error) {
      return error;
    }
  }

  static async validateToken(req, res, next) {
    try {
      const token = await server.locals;
      if (token) {
        const { __uid } = decode(token);
        req.token = __uid;
        next();
      } else {
        return requestHandler.error(res, 400, `Email is invalid`);
      }
    } catch (error) {
      return error;
    }
  }
}
