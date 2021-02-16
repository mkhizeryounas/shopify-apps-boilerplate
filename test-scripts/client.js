const Shopify = require('shopify-api-node');

const SHOPIFY_CREDS = {
  ACCESS_TOKEN: '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',
  SHOP_NAME: 'dev-shopdesk',
  API_KEY: 'a75b56139aefa6d06f16c616cd6a9e25',
  PASSWORD: 'c8cc8d8188183797ae15af2fcd4042ee',
};

// const client = new Shopify({
//   shopName: SHOPIFY_CREDS.SHOP_NAME,
//   apiKey: SHOPIFY_CREDS.API_KEY,
//   password: SHOPIFY_CREDS.PASSWORD,
// });

const client = new Shopify({
  shopName: SHOPIFY_CREDS.SHOP_NAME,
  accessToken: SHOPIFY_CREDS.ACCESS_TOKEN,
});

module.exports = client;
