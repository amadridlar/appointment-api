const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/main');

const { expect } = chai;
const url = 'http://localhost:3000';

chai.use(chaiHttp);

afterAll(() => {
  server.close();
});

describe('Server', () => {
  test('starts correctly', (done) => {
    chai.request(url)
      .get('/')
      .set('Content-Type', 'application/json')
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.be.equal('success');
        expect(res.body.message).to.be.equal('API is up and running');
        done();
      });
  });
});
