const Command = require("./command");

class PythonCommand extends Command {
  build(filePath) {
    const command = 'c:\\python39\\python.exe ' + filePath;
    return command;
  }
}

module.exports = PythonCommand;
