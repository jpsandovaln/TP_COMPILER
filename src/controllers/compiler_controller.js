const Compiler = require('../services/compiler');

class CompilerController {

  async post(req, res) {
    const inputFile = req.file.path;
    const lang = req.body.lang;
    const version = req.body.version;

    try {
      const comp = new Compiler();
      const result = await comp.run(inputFile, lang, version);
      res.status(200).json({
        data: result  
      });
    } catch (error) {
        res.status(error.status).json({
        errorMessage: error.message,
        errorCode: error.errorCode
      });
    }
  }
}

module.exports = CompilerController;
