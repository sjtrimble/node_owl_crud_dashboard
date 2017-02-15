var owls = require('../controllers/owls.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    owls.show(req, res);
  })

  app.get('/new', function(req, res) {
    owls.create(req, res);
  })

  app.get('/owls/:id', function(req, res) {
    owls.details(req, res);
  })

  app.post('/owls', function(req, res) {
    owls.view(req, res);
  })

  app.get('/owls/destroy/:id', function(req, res) {
    owls.destroy(req, res);
  })

  app.get('/owls/edit/:id', function(req, res) {
    owls.edit(req, res);
  })
}
