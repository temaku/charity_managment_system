const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const adminController = require('../controllers/adminController');

// router.use(adminController.protect,adminController.restrictTo("admin"));
router.route('/').
post(taskController.createTask).
get(taskController.getAllTasks)

router.route('/:id').
get(taskController.getTask).
patch(taskController.updateTask).
delete(taskController.deleteTask)

module.exports = router;