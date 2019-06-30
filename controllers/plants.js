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

  // by id 
  app.get('/plants/:id', function (req, res) {
    Plant.findById(req.params.id)
      .then(plant => {
        res.render('plants-show', {plant})
      })
      .catch(err => {
        console.log(err.message)
      })
  });

  // EDIT
  app.get('/plants/:id/edit', (req, res) => {
    Plant.findById(req.params.id, function(err, plant) {
      res.render('plants-edit', {plant: plant});
    })
  })

  // UPDATE
  app.put('/plants/:id', (req, res) => {
    Plant.findByIdAndUpdate(req.params.id, req.body)
      .then(plant => {
        res.redirect(`/plants/${plant._id}`)
      })
      .catch(err => {
        console.log(err.message)
      })
  })
}