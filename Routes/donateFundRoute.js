const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const donateFundController = require('../controllers/donateFundController');
const router = express.Router({mergeParams:true});

router.route('/').
post(
authMiddleware.protect,
donateFundController.setFundraiseDonateId,
donateFundController.createDonateFund).
get(donateFundController.getAllDonateFund);

router.route('/:id').
get(donateFundController.getDonateFund).
patch(donateFundController.updateDonateFund).
delete(donateFundController.deleteDonateFund);

module.exports = router;