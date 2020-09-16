const app = require('express');

const indexController = require('../controllers/indexController');
const indexRouter = app.Router();

indexRouter.route('/').get(indexController.getIndex);

module.exports = indexRouter