const Shopify = require('shopify-api-node');

const client = ({
  accessToken = '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',
  shopName = 'dev-shopdesk',
}) => {
  const instance = new Shopify({
    shopName,
    accessToken,
  });
  return instance;
};

module.exports = client;
