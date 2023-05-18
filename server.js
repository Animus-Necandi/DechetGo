const https = require('https');

https.get('https://dechetgo.000webhostapp.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const dataArray = JSON.parse(data);
    dataArray.forEach((element) => {
      console.log(element);
      console.log("\n"); // Ajout d'un saut de ligne
    });
  });
}).on('error', (err) => {
  console.error('Error: ' + err.message);
});



//   import fetch from 'node-fetch';

// fetch('https://www.data.gouv.fr/fr/datasets/r/046c8048-a276-4432-bf05-2b1769ea7889')
//   .then(response => response.text())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

