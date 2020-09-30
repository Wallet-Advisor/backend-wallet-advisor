const { Router } = require('express');
const {
    handleUserRiskCategoriesGet,
    handleUserRiskCategoriesPost
} = require('../controllers/userCategoryController');

const authenticate = require('../api/auth/authenticate');

const router = Router();

router.get('/', authenticate, handleUserRiskCategoriesGet)
router.post('/', authenticate, handleUserRiskCategoriesPost)

module.exports = router;