const express = require('express');
const bodyParser = require('body-parser');

class app {
  constructor () {
    this.express = express();

    this.middlewares();
  }

  middlewares () {
    this.express.use(bodyParser.urlencoded({extended: true}));
    this.express.use(bodyParser.json((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type: application/json");
      next();
    }));
  }
}

module.exports = app;