const getPost = (req, res) => {
  res.send('this is the posts page')
}

const postController = {};
postController.getPost = getPost;

module.exports = postController;
