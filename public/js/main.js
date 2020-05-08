String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

function oAuth2AuthenticateDialog(url) {
  var oAuthDialog = window.open(
    url,
    'oAuth2AuthenticateDialog',
    'width=700,height=500'
  );
}
function oAuthCloseDialog(res, host) {
  window.opener.postMessage(JSON.stringify(res), host); // To send data to domain
  window.close();
}
window.addEventListener(
  'message',
  function (event) {
    // console.log(event.data);
    let token = JSON.parse(event.data);
    console.log(token); //do what ever
    document.getElementById('json').textContent = JSON.stringify(
      token,
      undefined,
      2
    );

    $('pre').show();
    $('#successMsg').show();
    // $('#connectPanel').hide();
  },
  false
);

async function init_shopify_auth(url) {
  try {
    let val = prompt(`Enter value for shop_name`, 'dev-shopdesk');
    if (val) {
      url = url.replaceAll('{{shop_name}}', val);
    } else {
      throw `Value for shop_name was required`;
    }
    oAuth2AuthenticateDialog(url);
  } catch (err) {
    alert(err);
    console.log('ERR', err);
  }
}
