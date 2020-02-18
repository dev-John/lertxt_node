const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(9000, () => {
  console.log("Executando o servidor na porta 9000");
})
