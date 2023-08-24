class Command {
  constructor() {
    if (this.constructor === Command) {
      throw new Error('Abstract class connot be instantiated');
    }
  }

  build(filePath, version) {
    throw new Error('Method build must be implemented');
  }
}

module.exports = Command;
