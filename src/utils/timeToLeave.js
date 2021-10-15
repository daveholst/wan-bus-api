var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

function timeToLeave(busTime) {
  busHour = busTime.split(':')[0]
  busMin = busTime.split(':')[1]
  const busTimeDateObj = dayjs().tz("Australia/Perth").set('hour', busHour).set('m', busMin)
  return busTimeDateObj.diff(dayjs().tz("Australia/Perth"), 'minutes')
}

module.exports = timeToLeave;