class CommandException extends Error {
  constructor(message, status, errorCode) {
    super(message);
    this.status = status;
    this.errorCode = errorCode;
  }

  get status() {
    return this.status;
  }

  get errorCode() {
    return this.errorCode;
  }
}

module.exports = CommandException;
