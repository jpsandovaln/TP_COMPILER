const { getDefaultResultOrder } = require("dns");
const CommandException = require("./exceptions/commandException");
const ContentValidator = require("./validator/content_validator");
const Context = require("./validator/context");
const StringValidator = require("./validator/string_validator");

class Parameter {
    constructor(filePath, version) {
        this.filePath = filePath;
        this.version = version;
    }

    get getFilePath() {
        return this.filePath;
    }

    set setFilePath(filePath) {
        this.filePath = filePath;
    }

    get getVersion() {
        return this.version;
    }

    set setVersion(version) {
        this.version = version;
    }

    validate(extensionList, versionList) {
      const fileExt = this.filePath.split('.').pop();
      const strategies = [
        new StringValidator("filePath", this.filePath),
        new ContentValidator(extensionList, fileExt, "extension"),
        new StringValidator("version", this.version),
        new ContentValidator(versionList, this.version, "version")
      ];
      const context = new Context(strategies);
      context.validate();
    }
}

module.exports = Parameter;
