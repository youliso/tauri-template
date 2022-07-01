const { createServer } = require('vite');
const { readFileSync } = require('fs');
const { resolve } = require('path');

process.env['viteMode'] = 'development';

async function start() {
  let port = 3347;
  const server = await createServer(require('./vite.config'));
  await server.listen(port);
  server.printUrls();
}

start().then();
