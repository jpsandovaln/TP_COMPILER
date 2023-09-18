const Command = require("./command");
const CommandException = require("./exceptions/commandException");

const extensionList = ["py"];
const versionList = ['3.9'];

class PythonCommand extends Command {
  constructor() {
    super();
    this.pythonVersionPath = new Map();
    this.pythonVersionPath.set(versionList[0], process.env.PYTHON39);
  }
  build(parameter) {
    parameter.validate(extensionList, versionList);
    try {
      const command = this.pythonVersionPath.get(parameter.getVersion) +'python ' + parameter.getFilePath;
      return command;
    } catch (error) {
      throw new CommandException(error.message, "404", "TP-100");
    }
  }
}

module.exports = PythonCommand;
