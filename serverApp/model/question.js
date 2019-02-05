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

questionSchema.pre('save', function (next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) this.created_at = currentDate;
  next();
});

module.exports = mongoose.model('Question', questionSchema); 