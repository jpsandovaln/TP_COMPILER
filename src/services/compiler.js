const Execute = require('./execute');
const FactoryCommand = require('./factory_command');
const Parameter = require('./paremeter');

class Compiler {
  constructor() {
    console.info('new instance');
  }

  async run(inputFile, lang, version) {
    const factoryCommand = new FactoryCommand();
    const command = factoryCommand.getInstance(lang);
    const cmdResullt = command.build(new Parameter(inputFile, version));
    const execute = new Execute();
    const result = await execute.run(cmdResullt);
    return result;
  }
}

module.exports = Compiler;
