const keys = require('../config/keys');
const sha256 = require('sha256');
const Joi = require('joi');

module.exports = {
  btoa: (str) => Buffer.from(str).toString('base64'),
  atob: (str) => Buffer.from(str, 'base64').toString(),
  parse: (msg) => {
    return JSON.parse(JSON.stringify(msg));
  },
  time: () => {
    return Math.floor(new Date() / 1000);
  },
  hash: (str) => {
    return sha256(str + keys.secret);
  },
  validate: async (obj, schema) => {
    return new Promise((resolve, reject) => {
      Joi.validate(obj || {}, schema, function (error, value) {
        if (error) {
          error.responseCode = 422; // validation error
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  },
};
