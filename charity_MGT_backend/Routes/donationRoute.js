const express = require('express');
const donationController = require('../controllers/donationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router({ mergeParams: true });
router.route('/').post(
    authMiddleware.protect,
    authMiddleware.restrictTo('donor'),
    donationController.setCharityDonorIds,
    donationController.createDonation).
    get(authMiddleware.protect,donationController.getUserDonation);
router.get('/get/stats',donationController.getDonationStats);


router.route('/:id').
get(donationController.getDonation).
patch(donationController.updateDonation).
delete(donationController.deleteDonation)
module.exports = router