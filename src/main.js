const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rootRoutes = require('../src/routes/rootRoute');
const appointmentRoot = require('../src/routes/appointmentRoot');

const serverPort = 3000;
const app = express();

// MIDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());

// ROUTES
app.use('/', rootRoutes);
app.use('/appointments', appointmentRoot);

const server = app.listen(serverPort, () => {
  console.log(colors.bgGreen(`Server is up and running on port ${serverPort}`));
});

module.exports = server;
