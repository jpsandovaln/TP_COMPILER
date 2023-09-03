const Command = require("./command");

class NodeCommand extends Command {
    constructor() {
        super();
        this.nodeVersionPath = new Map();
        this.nodeVersionPath.set('11', process.env.JAVA7);
        this.nodeVersionPath.set('14', process.env.JAVA8);
      }
    
      build(filePath, version) {
        return 'dir';
      }
}

module.exports = NodeCommand;
