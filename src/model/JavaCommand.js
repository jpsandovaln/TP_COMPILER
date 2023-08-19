const Command = require("./command");
const path = require('path');

class JavaCommand extends Command {
  build(filePath) {
    const classDir = path.dirname(filePath);
    const fileName = path.parse(filePath).name;
    const command = '"C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\javac" ' + filePath + ' && "C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\java" -cp ' + classDir + ' ' + fileName;
    return command;
  }
}

module.exports = JavaCommand;
