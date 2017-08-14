const chalk = require('chalk');


function blue(text) {
  return chalk.cyan.bold(text);
};

function pink(text) {
  return chalk.magenta.bold(text);
};

function green(text) {
  return chalk.green.bold(text);
}

function red(text) {
  return chalk.red.bold(text);
}

module.exports = {
  blue: blue,
  pink: pink,
  green: green,
  red: red
}
