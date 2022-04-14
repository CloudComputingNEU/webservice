const express = require('express');
const winston = require('winston');
const  expressWinston = require('express-winston');
const app = express();
const statsdClient = require('./util/statsdUtil.js');
app.use(express.json());

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}))

const router = express.Router();
app.use('/v1/user', require('./User/user.controller'));

router.get('/healthz', (req, res) => {
  logger.info('inside get request');
  res.send();
});
// router.get('/heal', (req, res) => {
//   logger.info('inside get request');
//   res.send();
// });
app.use('/v1', router);
router.get('*', (req, res) => {
  res.status(400);
  res.setHeader('Content-Type', 'application/json');
  res.send()
});
module.exports = app;
