const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    entry:String,
    questions:[{
        accepted:Boolean,
        timespent:String,
        snapshots:[],
        timeoffbrowser:Number,
        question:String,
        answer:String
    }],
    invitation:{
        status:String,
        token: String,
        valid:Boolean,
        expireDate:Date
    },
    result: Boolean,
    published: Boolean
  });

  module.exports = mongoose.model('Student', studentSchema);
