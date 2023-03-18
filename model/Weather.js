const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String,
})



const WeatherModel = mongoose.model("expense", weatherSchema)
module.exports = WeatherModel