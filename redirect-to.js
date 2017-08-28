const params = window.location.search
  .substr(1)
  .split('&')
  .reduce((params, hash) => {
      let [key, val] = hash.split('=')
      return Object.assign(params, {[key]: decodeURIComponent(val)})
  }, {});
const url = params.url || 'https://github.com/lexoyo/redirect-to';
const delay = parseInt(params.delay || '0');
const text = params.text;
if(text) document.getElementById('text').innerHTML = text;
setTimeout(function() {
  window.location.href = url;
}, delay);
