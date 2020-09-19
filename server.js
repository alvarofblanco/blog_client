const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path')

const indexRouter = require('./src/routes/indexRouter');
const postRouter = require('./src/routes/postRouter');

const app = express();
const PORT = process.env.PORT || 3333

// MIDDLEWAREs
app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/post', postRouter)

// Sirve los archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

// Configura ejs como el motor de vista
app.set('view engine', 'ejs');
// Setea la carpeta donde se encuentran los archivos .ejs
app.set('views', './public/views');

app.listen(PORT, () => {
  debug(`App listening on port: ${PORT}`);
})
