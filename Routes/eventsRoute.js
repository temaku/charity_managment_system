const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventsController');
const eventRegisterRoute = require('../Routes/eventRegisterRoute');

router.use('/:eventId/register',eventRegisterRoute);
router.route('/').
post(eventController.createEvent).
get(eventController.getEvents);

router.route('/:id').
get(eventController.getEvent).
patch(eventController.updateEvent).
delete(eventController.deleteEvent);

module.exports = router;