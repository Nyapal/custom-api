const Plant = require('../models/plant')

module.exports = app => {
  // index
  app.get('/', function (req, res) {
    Plant.find({})
      .then(plants => {
        res.render('plants-index', {plants})
      })
      .catch(err => {
        console.log(err.message)
      })
  })
  
  // new plant 
  app.get('/plants/new', function (req, res) {
    res.render('plants-new')
  })
  
  // create
  app.post('/plants/new', (req, res) => {
    const plant = new Plant(req.body)

    plant.save((err, plant) => {
      return res.redirect('/')
    })
  });
}