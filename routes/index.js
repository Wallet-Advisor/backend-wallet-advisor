const { Router } = require('express');
const authRoutes = require('./auth');
const usersRoutes = require('./users');
const riskCategoryRoutes = require('./riskCategory');
const assetsCategoryRoutes = require('./riskCategory');
const userInfoCategoryRoutes = require('./userCategory');
const ratesCategoryRoutes = require('./ratesCategory');
const subscriptionRoutes = require('./sub')


const router = Router();

router.use('/', authRoutes);
router.use('/', usersRoutes);
router.use('/', riskCategoryRoutes);
router.use('/', assetsCategoryRoutes);
router.use('/user-category', userInfoCategoryRoutes);
router.use('/rates', ratesCategoryRoutes);
router.use('/', subscriptionRoutes);


module.exports = router;