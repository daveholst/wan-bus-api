const express = require('express');
const transperth = require('transperthapi');
const timeToLeave = require('../utils/timeToLeave')
const Client = new transperth();


const routes = express.Router({
  mergeParams: true
})

const wanStop = '25349'

routes.get('/', async (req, res) => {
  const data = await Client.busStopTimes(wanStop)
  if (data.error) {
    console.error('inside if error', data.error)
    res.status(500).json({ error: data.error })
    return
  }
  if (data.buses.length <= 0) {
    res.status(200).json({ message: 'No More buses today' })
    return
  }
  data.buses.forEach(busTime => {
    busTime.timeToLeave = timeToLeave(busTime.time);
  });
  console.log('data log::', data)
  res.status(200).json(data.buses)
  return;
})

module.exports = {
  routes,
}