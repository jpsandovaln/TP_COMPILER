const Command = require("./command");
const CShard = require("./cshard");

class CShardCommandAdapter extends Command {
    constructor() {
        super();
        this.cshardVersionPath = new Map();
        this.cshardVersionPath.set('1', process.env.PYTHON39);
      }
      build(filePath, version) {
        const cshard = new CShard(filePath);
        cshard.version = version;
        return cshard.createShardCommand();
      }
}

module.exports = CShardCommandAdapter;
