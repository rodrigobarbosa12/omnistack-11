const crypto = require('crypto');

module.exports = eneratorUniqueId = () => crypto.randomBytes(4).toString('HEX');;
