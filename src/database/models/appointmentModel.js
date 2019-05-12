const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
