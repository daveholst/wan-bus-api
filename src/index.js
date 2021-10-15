const express = require('express');
const cors = require('cors')

const {
  routes: busRoutes
} = require('./bus/routes')


const app = express();

app.use(cors());
app.use('/bus', busRoutes)

module.exports = app;