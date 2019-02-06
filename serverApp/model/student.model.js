const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    entry:String,
    questions:[{
        question:String,
        answer:String,
        timespent:String,
        snapshots:[],
        timeoffbrowser:Number,
        accepted:Boolean
    }],
    invitation:{
        token: String,
        status:String,
        valid:Boolean,
    },
    result: Boolean,
    published: Boolean
  });

  module.exports = mongoose.model('Student', studentSchema);
