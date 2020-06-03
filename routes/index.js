const { Router } = require('express');
const authRoutes = require('./auth');
const riskCategoryRoutes = require('./riskCategory');
const assetsCategoryRoutes = require('./riskCategory');


const router = Router();

router.use('/', authRoutes);
router.use('/', riskCategoryRoutes);
router.use('/', assetsCategoryRoutes);

module.exports = router;