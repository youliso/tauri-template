const { exec } = require('child_process');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const tauriCfg = require('../../src-tauri/tauri.conf.json');

async function start() {
  let port = 0;
  try {
    port = fs.readFileSync(path.resolve('.port'), 'utf8');
    tauriCfg.build.devPath = `http://127.0.0.1:${port}`;
    fs.writeFileSync('./src-tauri/tauri.conf.json', JSON.stringify(tauriCfg, null, 2));
  } catch (e) {
    throw 'not found .port';
  }
  const config = require('./webpack.config')('development');
  const options = {
    host: 'localhost',
    port: port,
    hot: true,
    liveReload: false,
    historyApiFallback: true,
    static: path.resolve('dist')
  };
  const compiler = webpack(config);
  const server = new webpackDevServer(options, compiler);
  server.start();
}

start().then(() => {
  exec(
    'yarn tauri dev',
    {
      cwd: path.resolve()
    },
    (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(stdout);
      console.log(stderr);
    }
  );
});
