const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventsController');
const eventRegisterRoute = require('../Routes/eventRegisterRoute');
const adminController = require('../controllers/adminController');

router.use('/:eventId/register',eventRegisterRoute);

// router.use(adminController.protect,adminController.restrictTo("admin"));

router.route('/').
post(eventController.createEvent).
get(eventController.getEvents);

router.route('/:id').
get(eventController.getEvent).
patch(eventController.uploadEventPhoto,eventController.resizeEventPhoto,eventController.updateEvent).
delete(eventController.deleteEvent);

module.exports = router;