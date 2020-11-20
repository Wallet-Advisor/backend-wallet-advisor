const { Router } = require('express');
const {
  register,login,newPassword,passwordReset
} = require('../controllers/authController');
const UserValidator = require('../middlewares/userValidator');


const router = Router();

router.post('/register',UserValidator.userInput, register);
router.post('/login', UserValidator.userLogin, login);
router.post('/forgot-password',UserValidator.inviteInput, passwordReset)
router.patch('/forgot-password',newPassword)




module.exports = router;
