class CShard {
  constructor(file) {
    this._file
  }

  set version(version) {
    this._version = version;
  }

  createShardCommand() {
    return 'dir';
  }
}

module.exports = CShard;
