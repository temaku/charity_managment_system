const express = require('express');
const router = express.Router();
const fundraiseController = require('../controllers/fundraiseController');
const fundDonateRoute = require('./donateFundRoute');

router.use('/:fundId/donate',fundDonateRoute);
router.route('/').
post(fundraiseController.createFundraise).
get(fundraiseController.getAllFundraise);

router.route('/:id').
get(fundraiseController.getFundraise).
patch(fundraiseController.updateFundraise).
delete(fundraiseController.deleteFundraise)

module.exports = router;