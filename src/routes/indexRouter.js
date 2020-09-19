const app = require('express');
const indexController = require('../controllers/indexController');

const indexRouter = app.Router();

indexRouter.route('/').get(indexController.getIndex);
indexRouter.route('/about').get(indexController.getAbout);
indexRouter.route('/contact').get(indexController.getContact);
indexRouter.route('/post').get(indexController.getPost);

module.exports = indexRouter;
