const Command = require("./command");
const CommandException = require('./exceptions/commandException')
const path = require('path');

class JavaCommand extends Command {
  constructor() {
    super();
    this.javaVersionPath = new Map();
    this.javaVersionPath.set('1.7', process.env.JAVA7);
    this.javaVersionPath.set('1.8', process.env.JAVA8);
  }

  build(filePath, version) {
    if (filePath === undefined) {
      throw new CommandException("invalid file path", "404", "TP-1001");
    }
    if (!version) {
      throw new CommandException("invalid java version", "404", "TP-1002");
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
