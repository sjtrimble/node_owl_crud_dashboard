var mongoose = require('mongoose');
var Owl = mongoose.model('Owl')

module.exports = {

  show: function(req, res) {
      Owl.find({}, function(err, owls) {
        if(err) {
          console.log("Something went wrong");
        } else {
          console.log("Successfully added an owl!");
          res.render('index', {allowls: owls});
          }
      });
  },

  create: function(req, res) {
    let thisowl = undefined;
    res.render('newowl', {thisowl: thisowl});
  },

  details: function(req, res) {
    console.log("This owl id is:", req.params.id);
    // res.send("You requested the owl with id:" + req.params.id);
    Owl.findOne({name:req.params.id}, function(err, owl){
      if(err) {
        console.log("Error: Owl info not found");
      } else {
        res.render('owlinfo', {thisowl: owl});
        }
    });
  },

  view: function(req, res) {
    console.log("POST DATA", req.body)

    var owl = new Owl({name: req.body.name, age: req.body.age, image: req.body.image});
    owl.save(function(err) {
      if(err) {
        // console.log("Something went wrong");
      } else {
        // console.log("Successfully added a user!");
        res.redirect('/');
      }
    })
  },

  destroy: function(req, res) {
    console.log("bob");
    Owl.findOne({name:req.params.id}, function(err, owl){
      if(err) {
        console.log("Error: Owl info not found");
      } else {
          console.log("Owl found!", owl)
          Owl.remove({name: req.params.id}, function(err, owl){
            if(err) {
              console.log("Error: Owl info not found");
            } else {
              console.log("Owl deleted!")
              }
          });
        }
    });
    res.redirect('/');
  },

  edit: function(req, res) {
    Owl.findOne({name:req.params.id}, function(err, owl){
      if(err) {
        console.log("Error: Owl info not found");
      } else {
        console.log("Owl found!")
        res.render('newowl', {thisowl: owl});
        }
    });
  }
}
