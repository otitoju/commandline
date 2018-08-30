const mongoose = require('mongoose')

const customerTable = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    gender:String
})
module.exports = mongoose.model('customer', customerTable)