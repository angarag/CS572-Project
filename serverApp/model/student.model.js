const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    entry:String,
    invitation:{
        token: String,
        status:String,
        valid:Boolean,
    }
  });

  module.exports = mongoose.model('Student', studentSchema);
