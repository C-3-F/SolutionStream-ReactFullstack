var localtunnel = require('localtunnel');
const tunnel = localtunnel(5000, { subdomain: 'cfarrawesome' }, function(err, tunnel) {
  console.log('LT running');
  console.log(tunnel.url);
});

