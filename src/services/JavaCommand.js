const Command = require("./command");
const CommandException = require('./exceptions/commandException')
const path = require('path');

class JavaCommand extends Command {
  constructor() {
    super();
    this.javaVersionPath = new Map();
    this.javaVersionPath.set('1.7', 'C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\');
    this.javaVersionPath.set('1.8', 'C:\\Program Files\\Java\\jdk1.8.0_251\\bin\\');
  }

  build(filePath, version) {
    if (filePath === undefined) {
      throw new CommandException("invalid file path", "404", "TP-1001");
    }
    try {
      const classDir = path.dirname(filePath);
      const fileName = path.parse(filePath).name;
      const command = '"' + this.javaVersionPath.get(version) + 'javac" ' + filePath + ' && "' + this.javaVersionPath.get(version) + 'java" -cp ' + classDir + ' ' + fileName;
      return command;
    } catch(error) {
      throw new CommandException("Invalid command", "404", "TP-1002");
    }
  }
}

module.exports = JavaCommand;
