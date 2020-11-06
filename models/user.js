const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    author: String,
    title: {type: String, unique: true},
    //pubDate: Date,
    publisher: String,
    summary: {type: String, maxlength: 500},
    pages: { type : Number, minlength: 10},
    ISBN: { type: Number, minlength: 9, maxlength: 15}
})

const User = mongoose.model('user',bookSchema)

module.exports = User