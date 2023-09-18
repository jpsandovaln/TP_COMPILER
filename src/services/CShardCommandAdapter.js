const Command = require("./command");
const CShard = require("./cshard");

class CShardCommandAdapter extends Command {
    constructor() {
        super();
        this.cshardVersionPath = new Map();
        this.cshardVersionPath.set('1', process.env.PYTHON39);
      }
      build(parameter) {
        parameter.validate();
        const cshard = new CShard(parameter.getFilePath);
        cshard.version = parameter.getVersion;
        return cshard.createShardCommand();
      }
}

module.exports = CShardCommandAdapter;
