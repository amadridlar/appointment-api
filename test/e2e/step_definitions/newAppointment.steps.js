const { Given, When, Then } = require('cucumber');
const chai = require('chai');
const chaiHttp = require('chai-http');
const database = require('../../../src/database');

const url = 'http://localhost:3000';
const newAppointmentPath = '/appointment/new';
const { expect } = chai;
let patient = {};

chai.use(chaiHttp);

Given('a new patient', dataTable => patient = {
  name: dataTable.raw()[0][1],
  lastname: dataTable.raw()[1][1],
  address: dataTable.raw()[2][1],
  phoneNmbr: dataTable.raw()[3][1],
  date: dataTable.raw()[4][1],
  reason: dataTable.raw()[5][1],
});

When('make the reservation', done => chai.request(url)
  .post(newAppointmentPath)
  .set('Content-Type', 'application/json')
  .send(patient)
  .end((err, res) => {
    expect(res).to.have.status(200);
    done();
  }));

Then('the appointment is registered in the system', dataTable => database.findByPhone(patient.phone, (patientDB) => {
  expect(patientDB.name).to.be.equal(patient.name);
  expect(patientDB.lastname).to.be.equal(patient.lastname);
  expect(patientDB.address).to.be.equal(patient.address);
  expect(patientDB.phoneNmbr).to.be.equal(patient.phoneNmbr);
  expect(patientDB.date).to.be.equal(patient.date);
  expect(patientDB.reason).to.be.equal(patient.reason);
}));

Given('a patient with an appointment made', () => 'pending');

Then('the system register the appointment', () =>
  // Write code here that turns the phrase above into concrete actions
  'pending'
);

Then('the system advices that the patient has another appointment made', dataTable =>
  // Write code here that turns the phrase above into concrete actions
  'pending'
);

Given('a date already reserved', dataTable =>
  // Write code here that turns the phrase above into concrete actions
  'pending',
);

When('the reservation date is occupied', () =>
  // Write code here that turns the phrase above into concrete actions
  'pending',
);

Then('the system informs me that that date is occupied', () =>
  // Write code here that turns the phrase above into concrete actions
  'pending',
);

Then('not modifies the given date', () =>
  // Write code here that turns the phrase above into concrete actions
  'pending',
);
