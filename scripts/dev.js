const { spawn } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const { createServer } = require('vite');
const tauriCfg = require('../src-tauri/tauri.conf.json');

process.env['viteMode'] = 'development';

async function startMain() {
  const main = spawn('yarn', ['tauri', 'dev'], {
    shell: true
  });
  main.stdout.pipe(process.stdout);
  main.stderr.pipe(process.stderr);
}

async function startView() {
  let port = 0;
  try {
    port = readFileSync(resolve('.port'), 'utf8');
    tauriCfg.build.devPath = `http://localhost:${port}`;
    writeFileSync(resolve('src-tauri/tauri.conf.json'), JSON.stringify(tauriCfg, null, 2));
  } catch (e) {
    throw e;
  }
  const server = await createServer(require('./vite.config'));
  await server.listen(port);
  server.printUrls();
}

startView().then(() => startMain());
