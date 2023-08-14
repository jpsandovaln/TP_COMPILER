const Compiler = require('../model/compiler');

class CompilerController {
  async get(req, res) {
    const imputFile = req.file.path;
    const comp = new Compiler();
    const result = await comp.run(imputFile);
    res.send(result);
  }
}

module.exports = CompilerController;
