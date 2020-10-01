const { Router } = require('express');
const {
    handleUserRiskCategoriesGet,
    handleUserRiskCategoriesPost,
    handleUserCategoryDelete,
    handleUserRiskCategoriesEdit
} = require('../controllers/userCategoryController');

const authenticate = require('../api/auth/authenticate');

const router = Router();

router.get('/', authenticate, handleUserRiskCategoriesGet)
router.post('/', authenticate, handleUserRiskCategoriesPost)
router.put('/', authenticate, handleUserRiskCategoriesEdit)
router.delete('/', authenticate, handleUserCategoryDelete)

module.exports = router;