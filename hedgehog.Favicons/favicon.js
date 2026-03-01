// import { createServer } from 'node:http';
// import { readFileSync } from 'node:fs';
// import sharp from 'sharp';
// import { create } from 'node:domain'; 




// const images = readFileSync('./img/favicon.png');

// const server = createServer((req, res) => {
//   console.log(req.url)
//   if(req.url === '/favicon.ico') {
//     res.writeHead(200, { 'Content-Type': 'image/png' });
//     return res.end(images);
//   // }
//   // sharp(images).resize(500, 500).pipe(res);
//   // return;
// }
// });


// server.listen(3000, '127.0.0.3', () => {
//   console.log('Listening on 127.0.0.3:3000');
// });


// // const images = [
// //     './img/favicon.png',
// // ];
// // function obrobka(i) {
// //   let file = images[i];
// //   let name = 'result-image' + i;
// //   return sharp(file).resize(180, 180)

  
// //   console.log('Фотографія ' + i + ' оброблена!');
// // }
