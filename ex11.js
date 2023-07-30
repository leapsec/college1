import fetch from 'node-fetch';
fetch('https://api.cricapi.com/v1/cricScore?apikey=3ba3099f-95d1-45cf-b3fd-0db99fb7f808')
.then(response=>response.json())
.then(data=>{ console.log(data); })