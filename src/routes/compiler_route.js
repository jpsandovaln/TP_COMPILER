const express = require('express');
const FileMiddleware = require('../middlewares/file_middleware');
const router = express.Router();
const CompilerController = require('../controllers/compiler_controller');

class Router {
  constructor() {
    this.compiler = new CompilerController();
    this.fileMiddleware = new FileMiddleware();
  }

  initRouter() {
    router.post('/', this.fileMiddleware.upload(), this.compiler.post);
    return router;
  }
}

module.exports = Router
