const express = require('express');
const cors = require('cors')

const {
  routes: busRoutes
} = require('./bus/routes')


const app = express();

app.use(cors());
app.use('/api/bus', busRoutes)
app.get('/api/', (req, res) => {
  res.json({ message: 'hit the api!!', reqData: req.body })
  console.log(req.body)
})


module.exports = app;