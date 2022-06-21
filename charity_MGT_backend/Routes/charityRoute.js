const express = require('express');
const router = express.Router();
const charityController = require('../controllers/charityController');
const donationRouter = require('./donationRoute');
const adminController = require('../controllers/adminController');

router.use('/:charityId/donations', donationRouter);

router.route('/').post(adminController.protect,adminController.restrictTo("admin"),charityController.createCharity).
get(charityController.getAllCharity)
router.route('/:id').
get(charityController.getCharity).
 patch(charityController.uploadcharityPhoto,charityController.updateCharity).
delete(adminController.protect,adminController.restrictTo("admin"),charityController.deleteCharity)


module.exports = router