const JavaCommand = require("./JavaCommand");
const Command = require("./command");
const CommandException = require('./exceptions/commandException');

class JavaCommandProxy extends Command {
    constructor() {
        super();
        const date = new Date;
        this.hour = date.getHours();
    }

    build(parameter) {
        parameter.validate();
        if (this.hour > 22) {
           const javaCommand = new JavaCommand();
           const rsult = javaCommand.build(parameter.getFilePath, parameter.getVersion);
           return rsult;
        } else {
            throw new CommandException("access denied", "404", "TP-10078");
        }
    }
}

module.exports = JavaCommandProxy;
