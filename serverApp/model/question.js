const mongoose = require("mongoose");
const random = require('mongoose-simple-random');

const questionSchema = new mongoose.Schema({
  category: String,
  active: Boolean,
  question: String,
  created_at: Date,
  updated_at: Date
});

questionSchema.plugin(random); // plugin to find random documents

module.exports = mongoose.model('Question', questionSchema); 