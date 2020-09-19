const getIndex = (req, res) => {
  res.render('pages/index');
}

const getAbout = (req, res) => {
  res.render('pages/about');
}

const getPost = (req, res) => {
  res.render('pages/post')
}

const getContact = (req, res) => {
  res.render('pages/contact')
}

const indexController = {}

indexController.getIndex = getIndex;
indexController.getAbout = getAbout;
indexController.getPost = getPost;
indexController.getContact = getContact;

module.exports = indexController;
