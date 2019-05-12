const AppointmentModel = require('../database/models/appointmentModel');

module.exports = {
  saveAppointment: (data, callback) => {
    const appointment = new AppointmentModel(data);
    appointment.save((err, savedData) => {
      callback(err, savedData);
    });
  },
};
