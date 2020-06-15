const fs = require('fs');
const path = require('path');

function loadModels() {
  var models = {};
  fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0 && file !== 'index.js'))
    .forEach(file => {
      models[file.substr(0, file.length - 3)] = require(path.resolve(__dirname, file));
    });
  return models;
}

module.exports = loadModels();