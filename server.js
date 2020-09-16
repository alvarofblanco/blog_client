const express = require('express');
const debug = require('debug')('app')

const app = express();
const PORT = process.env.PORT || 3333

app.get('/', async (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  debug(`App listening on port: ${PORT}`);
})