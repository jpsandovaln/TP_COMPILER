const JavaCommand = require("./JavaCommand");
const PythonCommand = require("./PythonCommand");
const CShardCommandAdapter = require('./CShardCommandAdapter');
const NodeCommand = require("./NodeCommand");

class FactoryCommand {
  constructor() {
    this.commandMap = new Map();
    this.commandMap.set('java', new JavaCommand());
    this.commandMap.set('python', new PythonCommand());
    this.commandMap.set('cshard', new CShardCommandAdapter());
    this.commandMap.set('nodejs', new NodeCommand());
  }
 
  getInstance(lang) {
    return  this.commandMap.get(lang);
  }
}

module.exports = FactoryCommand;
