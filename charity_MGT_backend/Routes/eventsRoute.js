const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventsController');
const pushNotifierController = require('../controllers/firebaseNotification');
const eventRegisterRoute = require('../Routes/eventRegisterRoute');
const adminController = require('../controllers/adminController');

router.use('/:eventId/register',eventRegisterRoute);

// router.use(adminController.protect,adminController.restrictTo("admin"));

router.route('/').
post(adminController.protect,adminController.restrictTo("admin"),eventController.createEvent).
get(eventController.getEvents);

//router.route('/pushNotifiaction').get(pushNotifierController.pushnotification);

router.route('/:id').
get(eventController.getEvent).
patch(eventController.uploadEventPhoto,eventController.updateEvent).
delete(eventController.deleteEvent);

module.exports = router;