const { rejects } = require('assert');
const { exec } = require('child_process');
const { resolve } = require('path');
const { stdout, stderr } = require('process');

class Compiler {
  constructor() {
    console.info('new instance');
  }

  execute() {
    const command = '"C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\javac" D:\\code\\EjemploJava7.java && "C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\java" -cp D:\\code\\ EjemploJava7';
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.info('err: ' + err);
        }
        console.info('stdout: ' + stdout);
        console.info('stderr: ' + stderr);
    });
  }

  run() {
    const command = '"C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\javac" D:\\code\\EjemploJava7.java && "C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\java" -cp D:\\code\\ EjemploJava7';
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
