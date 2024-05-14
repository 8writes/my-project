const express = require('express');
const next = require('next');
const fs = require('fs');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sitemap = fs.readFileSync('./sitemap.xml', 'utf-8');

app.prepare().then(() => {
  const server = express();

  server.get('/sitemap.xml', (_, res) => {
    res.setHeader('Content-Type', 'text/xml');
    res.send(sitemap);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
