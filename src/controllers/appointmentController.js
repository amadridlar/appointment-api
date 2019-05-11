const database = require('../database');

module.exports = {
  newAppointment: (req, res) => {
    database.saveAppointment(req.body, (err, databaseResponse) => {
      if (err === null) {
        res.status(200);
        res.json({
          status: 'success',
          message: 'appointment correctly saved',
          data: {
            id: databaseResponse.id,
            name: databaseResponse.name,
            lastname: databaseResponse.lastname,
            address: databaseResponse.address,
            date: databaseResponse.date,
            reason: databaseResponse.reason,
          },
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
