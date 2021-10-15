const awsSeverlessExpress = require('aws-serverless-express');
const app = require('./src/index')

const server = awsSeverlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsSeverlessExpress.proxy(server, event, context)
}