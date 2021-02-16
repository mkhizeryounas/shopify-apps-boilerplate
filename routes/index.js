const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.reply({ data: { title: 'Shopify auth boilerplate' } });
});

module.exports = router;
