const express = require('express');
const FileMiddleware = require('../middlewares/file_middleware');
const router = express.Router();
const CompilerController = require('../controllers/compiler_controller');

const compiler = new CompilerController();
const fileMiddleware = new FileMiddleware();

router.post('/', fileMiddleware.upload(), compiler.post);

module.exports = router;
