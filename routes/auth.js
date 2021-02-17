const { Router } = require('express');
const {
  register,login,newPassword,passwordReset, confirmEmail
} = require('../controllers/authController');
const UserValidator = require('../middlewares/userValidator');


const router = Router();

router.post('/register',UserValidator.userInput, register);
router.post('/login', UserValidator.userLogin, login);
router.route('/forgotpassword').post(UserValidator.inviteInput, passwordReset);
// router.post('/forgotpassword', UserValidator.inviteInput, passwordReset)
router.route('/resetpassword').patch(UserValidator.validateToken, newPassword);
router.route('/verify_email').post(UserValidator.validateToken, confirmEmail);




module.exports = router;
