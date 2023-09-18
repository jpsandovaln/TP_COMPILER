const ValidatorStrategy = require("./validator_strategy");
const CommandException = require("../exceptions/commandException");

class StringValidator extends ValidatorStrategy {
    constructor(field, data) {
        super();
        this.field = field;
        this.data = data;
    }

    validate() {
        if (this.data === undefined || this.data === null || this.data.lenth === 0) {
            const message = "The field: " + this.field + " is invalid";
            throw new CommandException(message, "404", "TP-1001");
        }
    }
}

module.exports = StringValidator;
