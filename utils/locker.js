const jwt = require('jsonwebtoken');
const common = require('./common');
const cert = require('../config/keys').secret;

let data = {
  unlock: (request, response, next) => {
    let authHeader = request.headers['authorization'] || '';
    if (
      (typeof authHeader !== 'undefined' && authHeader.includes('Bearer ')) ||
      request.query.access_token
    ) {
      authHeader = request.query.access_token || authHeader.substring(7);
      jwt.verify(authHeader, cert, (err, decode) => {
        try {
          if (err) throw authHeader;
          request.user = decode;
          next();
        } catch (error) {
          response.reply({ statusCode: 401 });
        }
      });
    } else {
      response.reply({ statusCode: 401 });
    }
  },
  lock: (obj) => {
    obj['iat'] = common.time();
    // obj["exp"] = common.time() + 60 * 60 * 24;
    obj['access_token'] = jwt.sign(obj, cert);
    return obj;
  },
};

module.exports = data;
