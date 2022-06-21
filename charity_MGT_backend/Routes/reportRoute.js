const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');




router.route('/').
post(authMiddleware.protect,authMiddleware.restrictTo("volunteers"),reportController.createReport).
get(reportController.getAllReport)

router.route('/:id').
get(reportController.getReport).
patch(reportController.updateReport).
delete(reportController.deleteReport)

module.exports = router;