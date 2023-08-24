class ExecuteException extends Error {
  constructor(message) {
    super(message);
    this.status = "405";
    this.errorCode = "TP-200"
  }

   get status() {
    return this.status;
   }

   get errorCode() {
    return this.errorCode;
   }
}

module.exports = ExecuteException;
