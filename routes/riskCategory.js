const { Router } = require('express');
const {
    handleCategoriesGet,
    handleAssetsCategories
} = require('../controllers/riskCategories/categoryControllers');
const categoryValidator = require('../middlewares/categoryValidator');

const authenticate = require('../api/auth/authenticate');

const router = Router();

router.get('/risk-category', authenticate, categoryValidator.categoryScoreValidation, handleCategoriesGet );
router.get('/assets-category', authenticate, categoryValidator.validateID, handleAssetsCategories);

module.exports = router;