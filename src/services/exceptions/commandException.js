class CommandException extends Error {
  constructor(message, status, errorCode) {
    super(message);
    this._status = status;
    this._errorCode = errorCode;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  get errorCode() {
    return this._errorCode;
  }

  set errorCode(errorCode) {
    this._errorCode = errorCode;
  }
}

module.exports = CommandException;
