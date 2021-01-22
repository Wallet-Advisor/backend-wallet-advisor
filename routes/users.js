/* eslint-disable no-use-before-define */
const { Router } = require('express');
const authenticate = require('../api/auth/authenticate');
const {
  handleGetUserList,
  handleGetSingleUser,
  updateUserProfile
} = require('../controllers/users/userController');
const {
  handleSubscriptionGet,
  handleSubscriptionPost
} = require("../controllers/subController");

const UserValidator = require('../middlewares/userValidator');
const upload = require('../config/cloudinary');


const router = Router();

router.get('/users/', authenticate, handleGetUserList);
router.get('/users/:id', authenticate, handleGetSingleUser);
router.get('/users/search', authenticate, handleGetSingleUser);
router.get('/users/subscription', handleSubscriptionGet);
router.post('/users/subscription', handleSubscriptionPost);
router.put(
  '/users/profile',
  authenticate,
  upload.single('profile_image_url'),
  UserValidator.userProfile,
  updateUserProfile
);

module.exports = router;
