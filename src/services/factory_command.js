const JavaCommand = require("./JavaCommand");
const PythonCommand = require("./PythonCommand");

class FactoryCommand {
  constructor() {
    this.commandMap = new Map();
    this.commandMap.set('java', new JavaCommand());
    this.commandMap.set('python', new PythonCommand()); 
  }
 
  getInstance(lan) {
    return  this.commandMap.get(lang);
  }
}

module.exports = FactoryCommand;
