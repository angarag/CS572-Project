const mongoose = require("mongoose");
var random = require('mongoose-simple-random');

const questionSchema = new mongoose.Schema({
  category: String,
  active: Boolean,
  question: String,
  created_at: Date,
  updated_at: Date
});

questionSchema.plugin(random);

module.exports = mongoose.model('Question', questionSchema); 