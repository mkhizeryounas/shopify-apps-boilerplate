const keys = require('../config/keys');
const common = require('./common');

exports.generateShopifyAccessUrl = (
  url = '{{shop_name}}.myshopify.com',
  state = { source: 'shopify_app_store' }
) => {
  console.log(state, common.btoa(JSON.stringify(state)));
  return `https://${url}/admin/oauth/authorize?client_id=${
    keys.shopify.client_id
  }&redirect_uri=${keys.base_url}/oauth2/redirect&state=${common.btoa(
    JSON.stringify(state)
  )}&scope=${keys.shopify.scopes}`;
};
