const JavaCommand = require('../model/JavaCommand');
const Compiler = require('../model/compiler');
const Execute = require('../model/execute');

class CompilerController {
  /*async get(req, res) {
    const imputFile = req.file.path;
    const comp = new Compiler();
    const result = await comp.run(imputFile);
    res.send(result);
  }*/

  async get(req, res) {
    const inputFile = req.file.path;
    const javaCommand = new JavaCommand();
    const cmdResullt = javaCommand.build(inputFile);
    const execute = new Execute();
    const result = await execute.run(cmdResullt);
    res.send(result);
  }
}

module.exports = CompilerController;
