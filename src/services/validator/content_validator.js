const ValidatorStrategy = require("./validator_strategy");
const CommandException = require("../exceptions/commandException");

class ContentValidator extends ValidatorStrategy {
    constructor(allowedValues, data, description) {
        super();
        this.allowedValues = allowedValues;
        this.data = data;
        this.description = description;
    }

    validate() {
        if (!this.allowedValues.includes(this.data)) {
            const message = "invalid " + this.description;
            throw new CommandException(message, "404", "TP-544");
        }
    }
}

module.exports = ContentValidator;
