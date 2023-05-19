const https = require('https');

try {
  https.get('https://dechetgo.000webhostapp.com/', (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const dataArray = JSON.parse(data);
      const newData = JSON.stringify(dataArray);

      const options = {
        hostname: 'dechet-go-git-main-animus-necandi.vercel.app',
        path: '/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': newData.length
        }
      };

      const req = https.request(options, (res) => {
        res.on('data', (response) => {
          console.log('Response:', response.toString());
        });
      });

      req.on('error', (error) => {
        console.error('Error:', error.message);
      });

      req.write(newData);
      req.end();
    });
  }).on('error', (err) => {
    console.error('Error:', err.message);
  });
} catch (error) {
  console.error('Error:', error);
}


// import https from 'https';

// try {
//   https.get('https://dechetgo.000webhostapp.com/', (res) => {
//     let data = '';
//     res.on('data', (chunk) => {
//       data += chunk;
//     });
//     res.on('end', () => {
//       const dataArray = JSON.parse(data);
//       dataArray.forEach((element) => {
//         if (element.hasOwnProperty('idDecheterie')) {
//           console.log(element.idDecheterie);
//         }
//         if (element.hasOwnProperty('nomDecheterie')) {
//           console.log(element.nomDecheterie);
//         }
//         if (element.hasOwnProperty('adresseDecheterie')) {
//           console.log(element.adresseDecheterie);
//         }
//         if (element.hasOwnProperty('telDecheterie')) {
//           console.log(element.telDecheterie);
//         }
//         if (element.hasOwnProperty('mailDecheterie')) {
//           console.log(element.mailDecheterie);
//         }
//         console.log("\n");
//       });
//     });
//   }).on('error', (err) => {
//     console.error('Error: ' + err.message);
//   });
// } catch (error) {
//   console.error('Error:', error);
// }



// import https from 'https';

// https.get('https://dechetgo.000webhostapp.com/', (res) => {
//   let data = '';
//   res.on('data', (chunk) => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     const dataArray = JSON.parse(data);
//     dataArray.forEach((element) => {
//       console.log(element);
//       console.log("\n"); // Ajout d'un saut de ligne
//     });
//   });
// }).on('error', (err) => {
//   console.error('Error: ' + err.message);
// });



//   import fetch from 'node-fetch';

// fetch('https://www.data.gouv.fr/fr/datasets/r/046c8048-a276-4432-bf05-2b1769ea7889')
//   .then(response => response.text())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

