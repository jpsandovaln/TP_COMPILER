const Command = require("./command");
const CommandException = require("./exceptions/commandException");

class PythonCommand extends Command {
  build(filePath, version) {
    if (filePath === undefined) {
      throw new CommandException("Invalid file for python command", "404", "TP-100");
    }
    try {
      const command = 'c:\\python39\\python.exe ' + filePath;
      return command;
    } catch (error) {
      throw new CommandException(error.message, "404", "TP-100");
    }
  }
}

module.exports = PythonCommand;
