const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const adminController = require('../controllers/adminController');

router.use(adminController.protect,adminController.restrictTo('admin'));
router.route('/').get(budgetController.getAllBudget).post(budgetController.createBudget);
router.route('/:id').
get(budgetController.getBudget).
patch(budgetController.UpdateBudget).
delete(budgetController.deleteBudget);


module.exports = router;