import { createServer } from 'node:http';
import fs from "fs";
import sharp from "sharp";
import http from "http";

let currentRotation = 0;
/*
const server = createServer((req, res) => {
  console.log(req.url)
  if(req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    return res.end(fs.readFileSync('favicon.png'));
  }
    if (req.url === "/rotate") {
        currentRotation += 90;
        res.end("ok");
        return;
    }
        // Зображення через sharp
    if (req.url.startsWith("/image")) {
        res.writeHead(200, { "Content-Type": "image/png" });

        sharp("hedgehog.png")
            .rotate(currentRotation)
            .resize(500, 500)
            .png()
            .pipe(res);

        return;
    }
});
*/

const PORT = 3000;

fs.readFile("./views/index.html", function (err, html) {
  if (err) throw err;

  http
    .createServer(function (req, res) {
        if (req.url === "/") {
            res.writeHeader(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        }

        if(req.url === '/favicon') {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            return res.end(fs.readFileSync('./img/favicon.png'));
        }

        if(req.url === '/hedgehog') {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            return res.end(fs.readFileSync('./img/hedgehog.png'));
        }

        if (req.url === "/rotate") {
            currentRotation += 90;
            res.end("ok");
            return;
        }
    })
    .listen(PORT, '127.0.0.6', () => {
        console.log(`Server listening on port ${PORT}`);
    });

});
