const { Router } = require('express');
const {
    handleCategoriesGet,
    handleAssetsCategories
} = require('../controllers/riskCategories/categoryControllers');

// const authenticate = require('middlewares/CategoryValidator');

const router = Router();

router.get('/risk-category',handleCategoriesGet );
router.get('/assets-category', handleAssetsCategories);

module.exports = router;