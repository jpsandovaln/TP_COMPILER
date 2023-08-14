const express = require('express');
const Compiler = require('./src/model/compiler');
const app = express();

/*app.get('/api/v1/compiler', (req, res) => {
  res.send('Hello world123456');
});*/

/*app.get('/api/v1/compiler', (req, res) => {
  const comp = new Compiler();
  comp.execute();
  res.send('Hello');
});*/

app.get('/api/v1/compiler', async (req, res) => {
  const comp = new Compiler();
  const result = await comp.run();
  res.send(result);
});

const port = process.env.PORT || 8080;
console.info(port);

app.listen(port, () => console.info('server running ...'));
