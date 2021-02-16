if (process.env.NODE_ENV === 'production') require('dotenv').config();

module.exports = {
  mongodb: process.env.mongodb || 'mongodb://localhost:27017/syncr',
  secret: process.env.secret || 'c6aSsUzQBACrdWoWy6g7BkuxwKfkPbmB',
  base_url: process.env.base_url || 'http://localhost:3000',
  shopify: {
    client_id:
      process.env.shopify_client_id || '5d739bb49c258b806a64d4e8e924a7e8',
    client_secret:
      process.env.shopify_client_secret || 'e55a3b66a2a1e1c41b176249cb6e41e5',
    api_version: process.env.shopify_api_version || '2020-04',
    scopes:
      process.env.shopify_scopes ||
      'write_inventory,write_products,read_locations,write_checkouts,write_orders',
  },
};
