import https from 'https';

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

// const https = require('https');

// try {
//   https.get('https://dechetgo.000webhostapp.com/', (res) => {
//     let data = '';
//     res.on('data', (chunk) => {
//       data += chunk;
//     });
//     res.on('end', () => {
//       const dataArray = JSON.parse(data);
//       const newData = JSON.stringify(dataArray);

//       const options = {
//         hostname: 'dechet-go-git-main-animus-necandi.vercel.app',
//         path: '/',
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Content-Length': newData.length
//         }
//       };

//       const req = https.request(options, (res) => {
//         res.on('data', (response) => {
//           console.log('Response:', response.toString());
//         });
//       });

//       req.on('error', (error) => {
//         console.error('Error:', error.message);
//       });

//       req.write(newData);
//       req.end();
//     });
//   }).on('error', (err) => {
//     console.error('Error:', err.message);
//   });
// } catch (error) {
//   console.error('Error:', error);
// }
