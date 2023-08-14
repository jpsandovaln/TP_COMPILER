const express = require('express');
const compiler = require('./src/routes/compiler_route');
const app = express();

app.use('/api/v1/compiler', compiler);

const port = process.env.PORT || 8080;
console.info(port);

app.listen(port, () => console.info('server running ...'));
