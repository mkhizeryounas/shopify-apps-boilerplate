if (process.env.NODE_ENV === 'production') require('dotenv').config();

module.exports = {
  mongodb: process.env.mongodb || 'mongodb://localhost:27017/syncr',
  secret: process.env.secret || 'c6aSsUzQBACrdWoWy6g7BkuxwKfkPbmB',
  base_url: process.env.base_url || 'http://localhost:3000',
  shopify: {
    client_id:
      process.env.shopify_client_id || '9033a9389d46fd42ac36426331617a07',
    client_secret:
      process.env.shopify_client_secret ||
      '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',
    api_version: process.env.shopify_api_version || '2020-04',
    scopes:
      process.env.shopify_scopes ||
      'read_inventory,read_products,write_inventory,write_products,read_locations',
  },
};
