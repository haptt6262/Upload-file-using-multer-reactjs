const mongoose = require('mongoose');

const ItemModel = new mongoose.Schema({
    name: { type: String },
    img: { type: Array }
})
module.exports = mongoose.model("testUpload", ItemModel)