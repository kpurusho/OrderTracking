var winston = require('winston');

winston.add(winston.transports.Console);

module.exports.logger = winston;

