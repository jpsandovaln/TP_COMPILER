const { exec } = require('child_process');
const ExecuteException = require('./exceptions/ExecuteException');

class Execute {
  run(command) {
    if (command === undefined) {
      throw new ExecuteException("Invalid command");
    }
    try {
      return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
          if (err) {
            reject(err);
          }
          resolve(stdout);
        });
      });
    } catch (error) {
      throw new ExecuteException(error.message);
    }
  }
}

module.exports = Execute;
