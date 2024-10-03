const { Int32 } = require('mongodb');
const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    title:String,
    occupency :Number,
    desc:String,
    price:Number
})

const roomModel = mongoose.model("rooms",roomSchema);

module.exports = roomModel;

