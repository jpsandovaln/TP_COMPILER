const express = require('express');
const upload = require('../middlewares/multer_middleware');
const router = express.Router();
const CompilerController = require('../controllers/compiler_controller');

const compiler = new CompilerController();

router.get('/', upload(), compiler.get);

module.exports = router;
