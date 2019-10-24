const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rootRoutes = require('../src/routes/rootRoute');
const appointmentRoot = require('../src/routes/appointmentRoot');

const serverPort = 3000;
const app = express();

// MIDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());


error de código

// ROUTES
app.use('/', rootRoutes);
app.use('/appointments', appointmentRoot);

// Database connection
mongoose.connect('mongodb://localhost:27017/mongodb', { useNewUrlParser: true });

const server = app.listen(serverPort, () => {
  console.log(colors.bgGreen(`Server is up and running on port ${serverPort}`));
});

module.exports = server;
