const { Router } = require('express');
const authRoutes = require('./auth');
const riskCategoryRoutes = require('./riskCategory');
const assetsCategoryRoutes = require('./riskCategory');
const userInfoCategoryRoutes = require('./userCategory');
const ratesCategoryRoutes = require('./ratesCategory');
// const dollarRoutes = require('./ratesCategory');
// const equityRoutes = require('./ratesCategory');



const router = Router();

router.use('/', authRoutes);
router.use('/', riskCategoryRoutes);
router.use('/', assetsCategoryRoutes);
router.use('/user-category', userInfoCategoryRoutes);
router.use('/rates', ratesCategoryRoutes);
// router.use('/', dollarRoutes);
// router.use('/', equityRoutes);

module.exports = router;