const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.route('/').get(categoryController.getAllCategory).post(categoryController.createCategory);
router.route('/:id').
get(categoryController.getCategory).
patch(categoryController.UpdateCategory).
delete(categoryController.deleteCategory);


module.exports = router;