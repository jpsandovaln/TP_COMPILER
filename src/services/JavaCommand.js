const Command = require("./command");
const CommandException = require('./exceptions/commandException')
const path = require('path');

class JavaCommand extends Command {
  build(filePath) {
    if (filePath === undefined) {
      throw new CommandException("invalid file path", "404", "TP-1001");
    }
    try {
      const classDir = path.dirname(filePath);
      const fileName = path.parse(filePath).name;
      const command = '"C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\javac" ' + filePath + ' && "C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\java" -cp ' + classDir + ' ' + fileName;
      return command;
    } catch(error) {
      throw new CommandException("Invalid command", "404", "TP-1002");
    }
  }
}

module.exports = JavaCommand;
