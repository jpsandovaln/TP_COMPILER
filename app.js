const express = require('express');
const Router = require('./src/routes/compiler_route');
const app = express();

class App {
   static initServer() {
    const compiler = new Router();
    app.use('/api/v1/compiler', compiler.initRouter());
    const port = process.env.PORT || 8080;
    console.info(port);
    app.listen(port, () => console.info('server running ...'));
  }
}

App.initServer();
