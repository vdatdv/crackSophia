// Shadowrocket HTTP response script converted from sophiav4okmod.json
let body = $response.body;
try {
  if (body && body.includes('abhotupdate_cdn_url')) {
    const obj = JSON.parse(body);
    obj.abhotupdate_cdn_url = 'https://okmod.sbs/ffproxy?p=/';
    body = JSON.stringify(obj);
  }
} catch (e) {}
$done({body});
