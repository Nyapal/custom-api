const Plant = require('../models/plant')

module.exports = app => {
  // home
  app.get('/', function (req, res) {
    res.render('home')
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