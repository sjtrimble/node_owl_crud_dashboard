var mongoose = require('mongoose');

var OwlSchema = new mongoose.Schema({
  name: String,
  age: Number,
  image: String
});

var Owl = mongoose.model('Owl', OwlSchema);
