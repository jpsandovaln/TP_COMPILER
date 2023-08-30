const express = require('express');
const Router = require('./src/routes/compiler_route');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

class App {
   static initServer() {
    const compiler = new Router();
    app.use('/api/v1/compiler', compiler.initRouter());
    const port = process.env.PORT || 8080;
    const host = process.env.HOST || localhost
    console.info(port);
    app.listen(port, host, () => {
      console.info('server running on http://' + host + ':' + port);
    });
  }
}

App.initServer();
