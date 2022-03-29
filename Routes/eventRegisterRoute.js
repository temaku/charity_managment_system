const express = require('express');
const registerEventController = require('../controllers/registerEventContoller');
const router = express.Router({mergeParams:true});
const authMiddleware = require('../middleware/authMiddleware');
router.route('/').
post(
    authMiddleware.protect,
     authMiddleware.restrictTo('donor'),
     registerEventController.setEventRegisterIds,
    registerEventController.createRegisterEvent).
get(registerEventController.getAllUserRegisteredEvent);

router.route('/:id').
get(registerEventController.getRegisteredEvent).
patch(registerEventController.updateRegisteredEvent).
delete(registerEventController.deleteRegisterdEvent);

module.exports = router;