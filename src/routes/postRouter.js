const app = require('express');

const postController = require('../controllers/postController');
const router = app.Router();

router.route('/').get(postController.getPost);

module.exports = router;
