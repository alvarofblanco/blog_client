const getIndex = (req, res) => {
  res.send('this is the index page')
}

const indexController = {}
indexController.getIndex = getIndex;

module.exports = indexController;
