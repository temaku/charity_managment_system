const express = require('express');
const router = express.Router();
const generateReportController = require('../controllers/generatereport');


router.route('/').get(generateReportController.generateReport)

module.exports = router;