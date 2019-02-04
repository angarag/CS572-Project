const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Admin schema
var AdminSchema = new Schema({
    username: String,
    password: String
})


module.exports = AdminSchema = mongoose.model('Admin', AdminSchema);