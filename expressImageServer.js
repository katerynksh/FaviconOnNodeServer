import { readFileSync } from 'node:fs';
import sharp from 'sharp';
import express from 'express';

const app = express()
const port = 3000;
const favicon = readFileSync('img.png');
const imagePath = 'img.png';

function validateDimention(value, maxValue = 1000) {
  if (isNaN(value) ||  value <= 0 || value > maxValue)    {
    throw new Error(`Invalid dimension value: ${value}. Must be a number between 1 and ${maxValue}.`);
  }
  return true;
}

app.get('/img/:width/:height', (req, res) => {
  const width = parseInt(req.params.width, 10);
  const height = parseInt(req.params.height, 10);

  console.log(`Received request for image with width: ${width} and height: ${height}`);

if (!validateDimention(width) || !validateDimention(height)) {
    return res.status(400).send('Invalid width || height');
  }


  res.setHeader('Content-Type', 'image/png');

  sharp(imagePath)
    .resize(width, height, {
      fit: "cover",
      position: "center"
    })
    .png({ quality: 80 })
    .pipe(res);
  // }catch (error) {
  //   res.status(500).send('Internal Server Error');
  // }

});

app.get('/', (req, res) => {
  res.redirect('/img/300/500');

});


app.listen(port, () => {
  console.log(`Server is running on port 127.0.0.1:${port}`)
});