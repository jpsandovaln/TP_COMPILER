const JavaCommand = require('./JavaCommand');
const PythonCommand = require('./PythonCommand');
const Command = require('./command');
const Execute = require('./execute');

class Compiler {
  constructor() {
    console.info('new instance');
  }

  async run(inputFile, lang) {
    let command;
    if (lang === 'java') {
      command = new JavaCommand();
    }
    if (lang === 'python') {
      command = new PythonCommand();
    }
    const cmdResullt = command.build(inputFile);
    const execute = new Execute();
    const result = await execute.run(cmdResullt);
    return result;
  }
}

module.exports = Compiler;
