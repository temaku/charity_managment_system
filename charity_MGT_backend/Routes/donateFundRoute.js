const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const donateFundController = require('../controllers/donateFundController');
const router = express.Router({mergeParams:true});
const adminController = require('../controllers/adminController');

router.route('/').
post(
authMiddleware.protect,
authMiddleware.restrictTo("donor"),
donateFundController.setFundraiseDonateId,
donateFundController.createDonateFund)

router.use(adminController.protect,adminController.restrictTo("admin"));
router.route('/').get(donateFundController.getAllDonateFund);

router.route('/:id').
get(donateFundController.getDonateFund).
patch(donateFundController.updateDonateFund).
delete(donateFundController.deleteDonateFund);

module.exports = router;