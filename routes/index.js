const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const keys = require('../config/keys');
const utils = require('../src/modules/utils');

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.reply({ data: { title: 'Shopify auth boilerplate' } });
});

module.exports = router;
