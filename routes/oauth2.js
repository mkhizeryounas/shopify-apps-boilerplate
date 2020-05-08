const express = require('express');
const locker = require('../src/modules/locker');
const keys = require('../config/keys');
const http = require('request-promise');
const utils = require('../src/modules/utils');
const common = require('../src/modules/common');
const models = require('../config/models');

const router = express.Router();

router.get('/', async function (req, res, next) {
  res.reply({ message: 'Syncr OAuth2 connection service.' });
});

/* GET users listing. */
router.get('/connect', function (req, res, next) {
  let integrationUrl = utils.generateShopifyAccessUrl(
    '{{shop_name}}.myshopify.com',
    { source: 'admin_panel' }
  );
  res.render('index', { integrationUrl });
});

router.get('/redirect', async function (req, res, next) {
  try {
    console.log(req.query);
    let uri = `https://${req.query.shop}/admin/oauth/access_token`;
    let code = req.query.code;
    let result = await http({
      uri,
      method: 'POST',
      formData: {
        client_id: keys.shopify.client_id,
        client_secret: keys.shopify.client_secret,
        grant_type: 'authorization_code',
        redirect_uri: `${keys.base_url}/oauth2/redirect`,
        code: code,
      },
      json: true,
    });
    let state = JSON.parse(common.atob(req.query.state));
    result['base_url'] = `https://${req.query.shop}`;
    let location = await http({
      uri: `${result.base_url}/admin/api/${keys.shopify.api_version}/locations.json`,
      method: 'GET',
      headers: {
        'X-Shopify-Access-Token': result.access_token,
      },
      json: true,
    });
    result['default_location_id'] = location.locations[0].id; // Set default location ID
    result['locations'] = location.locations; // Set default location ID
    result = { creds: result, state };
    result.creds.locations = result.creds.locations.map((e) => ({
      location_id: e.id,
      name: e.name,
    }));
    result.creds.user = result.state.user;
    console.log('result', result);
    // SAVE TOKEN TO DB
    let dataToRender = {
      title: 'oauth',
      auth: JSON.parse(
        JSON.stringify({ data: result }).replace(/(\r\n\t|\n|\r\t)/gm, ' ')
      ),
      host: keys.base_url,
    };
    res.render('oauth-done', dataToRender);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
