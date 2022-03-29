const express = require('express');
const router = express.Router();
const charityController = require('../controllers/charityController');
const donationRouter = require('./donationRoute');

router.use('/:charityId/donations', donationRouter);

router.route('/').post(charityController.createCharity).
get(charityController.getAllCharity)
router.route('/:id').
get(charityController.getCharity).
patch(charityController.uploadcharityPhoto,charityController.resizeCharityPhoto,charityController.updateCharity).
delete(charityController.deleteCharity)


module.exports = router