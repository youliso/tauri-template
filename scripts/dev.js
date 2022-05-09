const { spawn } = require("child_process");
const { resolve } = require("path");

console.log(resolve("src-view"));

process.env["viteMode"] = "development";

async function startMain() {
  const main = spawn("yarn", ["tauri", "dev"], {
    shell: true,
  });
  main.stdout.pipe(process.stdout);
  main.stderr.pipe(process.stderr);
}

async function startView() {
  const main = spawn("trunk", ["serve"], {
    shell: true,
    cwd: resolve("src-view"),
  });
  main.stdout.pipe(process.stdout);
  main.stderr.pipe(process.stderr);
}

startView().then(() => startMain());
