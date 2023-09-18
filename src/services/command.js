class Command {
  constructor() {
    if (this.constructor === Command) {
      throw new Error('Abstract class connot be instantiated');
    }
  }

  build(parameter) {
    throw new Error('Method build must be implemented');
  }
}

module.exports = Command;
