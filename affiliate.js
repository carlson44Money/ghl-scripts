window.addEventListener('DOMContentLoaded', function () {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const affiliateId = getQueryParam('ref');

  const interval = setInterval(() => {
    const input = document.querySelector('input[name="ref_affiliate_id"]');
    if (input) {
      input.value = affiliateId || '';
      console.log('Affiliate ID set to:', affiliateId);
      clearInterval(interval);
    }
  }, 500);
});
