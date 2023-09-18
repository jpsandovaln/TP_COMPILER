const Command = require("./command");
const CommandException = require('./exceptions/commandException')
const path = require('path');

const extensionList = ["java"];
const versionList = ['1.7', '1.8'];

class JavaCommand extends Command {
  constructor() {
    super();
    this.javaVersionPath = new Map();
    this.javaVersionPath.set(versionList[0], process.env.JAVA7);
    this.javaVersionPath.set(versionList[1], process.env.JAVA8);
  }

  build(parameter) {
    parameter.validate(extensionList, versionList);
    try {
      const classDir = path.dirname(parameter.getFilePath);
      const fileName = path.parse(parameter.getFilePath).name;
      const command = '"' + this.javaVersionPath.get(parameter.getVersion) + 'javac" ' + parameter.getFilePath + ' && "' + this.javaVersionPath.get(parameter.getVersion) + 'java" -cp ' + classDir + ' ' + fileName;
      return command;
    } catch(error) {
      throw new CommandException("Invalid command", "404", "TP-1002");
    }
  }
}

module.exports = JavaCommand;
