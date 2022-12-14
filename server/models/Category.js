const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema(
    {
        title: { type: String, trim: true, required: true, unique: true },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Category', Category)
