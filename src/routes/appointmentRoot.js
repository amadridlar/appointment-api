const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');

router.route('/new')
  .post(appointmentController.newAppointment);

module.exports = router;
