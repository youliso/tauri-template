const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

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
    console.log("...");
  }
}

function buildMain() {
  const main = spawn("yarn", ["tauri", "build"], {
    shell: true,
  });
  main.stdout.pipe(process.stdout);
  main.stderr.pipe(process.stderr);
}

async function buildView() {
  const main = spawn("trunk", ["build", "--release"], {
    shell: true,
    cwd: path.resolve("src-view"),
  });
  main.stdout.pipe(process.stdout);
  main.stderr.pipe(process.stderr);
}

deleteFolderRecursive(path.resolve("dist")); //清除dist

buildView().then(() => buildMain());
