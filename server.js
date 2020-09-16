const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');

const indexRouter = require('./src/routes/indexRouter');
const postRouter = require('./src/routes/postRouter');

const app = express();
const PORT = process.env.PORT || 3333

// MIDDLEWAREs
app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/post', postRouter)

app.listen(PORT, () => {
  debug(`App listening on port: ${PORT}`);
})
