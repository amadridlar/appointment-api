const rootController = require('../../src/controllers/rootController');

describe('rootController', () => {
  describe('when entryPoint is called', () => {
    const req = {};
    test('responses with status 200', () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
      rootController.entryPoint(req, res);
      expect(res.status).toBeCalledTimes(1);
      expect(res.status.mock.calls[0][0]).toBe(200);
    });
    test('responses with the correct body', () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const expectedBody = {
        status: 'success',
        message: 'API is up and running',
      };
      rootController.entryPoint(req, res);
      expect(res.json).toBeCalledTimes(1);
      expect(res.json.mock.calls[0][0]).toEqual(expectedBody);
    });
  });
});
