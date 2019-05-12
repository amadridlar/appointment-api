const database = require('../database');

module.exports = {
  newAppointment: (req, res) => {
    database.saveAppointment(req.body, (err, databaseResponse) => {
      if (err === null) {
        res.status(200);
        res.json({
          status: 'success',
          message: 'appointment correctly saved',
          data: databaseResponse,
        });
      }
      if (err !== null) {
        res.status(500);
        res.json({
          status: 'error',
          message: 'error in database',
          data: err,

        });
      }
    });
  },
};
