const AppointmentModel = require('../../src/database/models/appointmentModel');
const database = require('../../src/database');
jest.mock('../../src/database/models/appointmentModel');

beforeEach(()=>{
  AppointmentModel.mockClear();
});

describe('Database', () => {
  describe('saveAppointment', () => {
    test('save document in database', () => {

      expect(AppointmentModel).not.toHaveBeenCalled();

      database.saveAppointment({name: 'johny',}, (err, savedData) => null);
      expect(AppointmentModel).toHaveBeenCalledTimes(1);
      expect(AppointmentModel.mock.instances[0].save).toHaveBeenCalledTimes(1);
    });
    test.todo('returns correct data when successfuly saved');
    test.todo('returns correct error data when error in save operation');
  });
});
