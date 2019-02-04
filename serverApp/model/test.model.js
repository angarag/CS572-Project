const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    name: String,
    address: String,
    date: Date
}) 

module.exports = mongoose.model('TestModel', testSchema);