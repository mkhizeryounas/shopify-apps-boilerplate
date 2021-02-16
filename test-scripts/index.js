const shopify = require('./client');

(async () => {
  const token = '5d0ae313923eb8ebd994793a4a1af870';
  const payload = {
    line_items: [
      {
        variant_id: 39072856,
        quantity: 5,
      },
    ],
  };
  const co = await shopify.checkout.get(token);
  console.log(co);
})();
