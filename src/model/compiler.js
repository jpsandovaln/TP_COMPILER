const { exec } = require('child_process');
const path = require('path');


class Compiler {
  constructor() {
    console.info('new instance');
  }

  run(filePath) {
    const classDir = path.dirname(filePath);
    const fileName = path.parse(filePath).name;
    console.info(classDir);
    console.info(fileName);
    console.info(filePath);
    const command = '"C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\javac" ' + filePath + ' && "C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\java" -cp ' + classDir + ' ' + fileName;
    console.info(command);
    return new Promise((resolve, reject) => {
      exec(command, (err, stdout, stderr) => {
        if (err) {
            reject(err);
        }
        resolve(stdout);
      });
    })
  }
}

module.exports = Compiler;
