const JavaCommand = require('../../src/services/JavaCommand');
const dotenv = require('dotenv');
const path = require('path');
const CommandException = require('../../src/services/exceptions/commandException');
const ExecuteException = require('../../src/services/exceptions/ExecuteException');

dotenv.config({ path: path.resolve(__dirname + './../../.env')});

describe("test java command", () => {
  test("build command success", () => {
    const command = new JavaCommand();
    const result = command.build('D:\\Code\\EjemploJava7.java', '1.7');
    console.info(result);
    const expected = '"C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\javac" D:\\Code\\EjemploJava7.java && "C:\\Program Files\\Java\\jdk1.7.0_80\\bin\\java" -cp D:\\Code EjemploJava7';
    expect(expected).toEqual(result);
  });

  test('build command error with null java file', () => {
    expect(() => {
        const command = new JavaCommand();
        command.build(null, '1.7');
    }).toThrow(CommandException);
  });

  test('build command error with undefined java file', () => {
    expect(() => {
        const command = new JavaCommand();
        command.build(undefined, '1.7');
    }).toThrow(CommandException);
  });

  test('build command error with null java version', () => {
    expect(() => {
      const command = new JavaCommand();
      const value = command.build('D:\\Code\\EjemploJava7.java', null);
    }).toThrow(CommandException);  
  });

  test('build command error with undefined java version', () => {
    expect(() => {
      const command = new JavaCommand();
      const value = command.build('D:\\Code\\EjemploJava7.java', undefined);
    }).toThrow(CommandException);  
  });
});

