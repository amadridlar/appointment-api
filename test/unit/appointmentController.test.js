const appointmentController = require('../../src/controllers/appointmentController');
const database = require('../../src/database/index');

describe('appointmentController', () => {
  describe('when newAppointment is called', () => {
    const req = {
      body: {
        name: 'johny',
        lastname: 'reland',
        address: 'vanlose allé 123',
        date: '04-05-2019',
        reason: 'oh my knee!',
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    test('save appointment data in database', () => {
      database.saveAppointment = jest.fn((request, callback) => {
        callback(null, {
          id: '1234b',
          name: 'johny',
          lastname: 'reland',
          address: 'vanlose allé 123',
          date: '04-05-2019',
          reason: 'oh my knee!',
        });
      });

      appointmentController.newAppointment(req, res);
      return expect(database.saveAppointment.mock.calls[0][0]).toBe(req.body);
    });
    test('responds with status 200', () => {
      database.saveAppointment = jest.fn((request, callback) => {
        callback(null, {
          id: '1234b',
          name: 'johny',
          lastname: 'reland',
          address: 'vanlose allé 123',
          date: '04-05-2019',
          reason: 'oh my knee!',
        });
      });

      appointmentController.newAppointment(req, res);
      return expect(res.status).toBeCalledWith(200);
    });
    test('responds the correct body', () => {
      database.saveAppointment = jest.fn((request, callback) => {
        callback(null, {
          id: '1234b',
          name: 'johny',
          lastname: 'reland',
          address: 'vanlose allé 123',
          date: '04-05-2019',
          reason: 'oh my knee!',
        });
      });

      const expectedResponseBody = {
        status: 'success',
        message: 'appointment correctly saved',
        data: {
          id: '1234b',
          name: 'johny',
          lastname: 'reland',
          address: 'vanlose allé 123',
          date: '04-05-2019',
          reason: 'oh my knee!',
        },
      };
      appointmentController.newAppointment(req, res);
      return expect(res.json).toBeCalledWith(expectedResponseBody);
    });

    describe('and an error ocurs saving data in database', () => {
      test('responds with 500 status', () => {
        database.saveAppointment = jest.fn((request, callback) => {
          callback('error doing things in database', {});
        });

        appointmentController.newAppointment(req, res);
        return expect(res.status).toBeCalledWith(500);
      });
      test('responds with the correct error body', () => {
        database.saveAppointment.mockRestore();
        database.saveAppointment = jest.fn((request, callback) => {
          callback('error doing things in database', {});
        });
        const expectedResponseBody = {
          status: 'error',
          message: 'error in database',
          data: 'error doing things in database',
        };
        expect(res.json).toBeCalledWith(expectedResponseBody);
      });
    });
  });
});
