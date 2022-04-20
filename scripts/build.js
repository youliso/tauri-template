const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const vite = require('vite');

function deleteFolderRecursive(url) {
  let files = [];
  if (fs.existsSync(url)) {
    files = fs.readdirSync(url);
    files.forEach(function (file, index) {
      let curPath = path.join(url, file);
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(url);
  } else {
    console.log('...');
  }
}

function buildMain() {
  const main = spawn('yarn', ['tauri', 'build'], {
    shell: true
  });
  main.stdout.pipe(process.stdout);
  main.stderr.pipe(process.stderr);
}

async function buildView() {
  await vite.build(require('./vite.config')).catch((error) => {
    console.log(`\x1B[31mFailed to build renderer process !\x1B[0m`);
    console.error(error);
    process.exit(1);
  });
}

deleteFolderRecursive(path.resolve('dist')); //清除dist

buildView().then(() => buildMain());
