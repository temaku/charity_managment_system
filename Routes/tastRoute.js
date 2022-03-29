const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');


router.route('/').
post(taskController.createTask).
get(taskController.getAllTasks)

router.route('/id').
get(taskController.getTask).
patch(taskController.updateTask).
delete(taskController.deleteTask)

module.exports = router;