const Compiler = require('../services/compiler');

class CompilerController {

  async post(req, res) {
    const inputFile = req.file.path;
    const lang = req.body.lang;
    const comp = new Compiler();
    const result = await comp.run(inputFile, lang);
    res.send(result);
  }
}

module.exports = CompilerController;
