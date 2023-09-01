const Command = require("./command");
const CommandException = require("./exceptions/commandException");

class PythonCommand extends Command {
  constructor() {
    super();
    this.pythonVersionPath = new Map();
    this.pythonVersionPath.set('3.9', process.env.PYTHON39);
  }
  build(filePath, version) {
    if (filePath === undefined) {
      throw new CommandException("Invalid file for python command", "404", "TP-100");
    }
    try {
      const command = this.pythonVersionPath.get(version) +'python ' + filePath;
      return command;
    } catch (error) {
      throw new CommandException(error.message, "404", "TP-100");
    }
  }
}

module.exports = PythonCommand;
