const { Router } = require('express');
const authRoutes = require('./auth');
const riskCategoryRoutes = require('./riskCategory');
const assetsCategoryRoutes = require('./riskCategory');
const userInfoCategoryRoutes = require('./userCategory');



const router = Router();

router.use('/', authRoutes);
router.use('/', riskCategoryRoutes);
router.use('/', assetsCategoryRoutes);
router.use('/user-category', userInfoCategoryRoutes);

module.exports = router;