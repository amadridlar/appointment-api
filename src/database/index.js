const AppointmentModel = require('../database/models/appointmentModel');

module.exports = {
  saveAppointment: (data, callback) => {
    appointment = new AppointmentModel(data);
    appointment.save((err, savedData) => {
      callback(err, savedData);
    });
  },
};
