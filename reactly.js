#!/usr/bin/env node
const path = require('path');
const { execFileSync } = require("child_process");

const webpack = path.resolve(__dirname, `./node_modules/.bin/webpack`);
const server = path.resolve(__dirname, `./node_modules/.bin/http-server`);
const tsc = path.resolve(__dirname, `./node_modules/.bin/tsc`);
const config = path.resolve(__dirname, `./webpack.config.js`);

function build() {
  try {
    execFileSync("npm", [
      "exec", "-c", `${webpack} -c ${config} --env production`
    ], {
      cwd: process.env.PWD,
      stdio: 'inherit'
    });
  } catch { }
}

function start() {
  try {
    execFileSync("npm", [
      "exec", "-c", `${webpack} serve -c ${config}`
    ], {
      cwd: process.env.PWD,
      stdio: 'inherit'
    });
  } catch { }
}

function serve() {
  const ver = process.env.npm_package_version;

  try {
    execFileSync(server, [
      "-p", "8081", "-c-1", "--proxy", `http://localhost:8081/index.${ver}.html?`, "-d", "false"
    ], {
      cwd: path.resolve(process.env.PWD, `./dist/`),
      stdio: 'inherit'
    });
  } catch { }
}

function check() {
  try {
    execFileSync("npm", [
      "exec", "-c", tsc
    ], {
      cwd: process.env.PWD,
      stdio: 'inherit'
    });
  } catch { }
}

switch (process.argv[2]) {
  case 'build':
    build();
    break;
  case 'start':
    start();
    break;
  case 'prod':
    build();
    serve();
    break;
  case 'check':
    check();
    break;
}
