var bodyParser = require('body-parser')
var express = require('express')
const path = require('path')
var app = express()
var mongoose = require('mongoose')
var WeatherModel = require('./model/Weather')
const api = require('./server/routes/api')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)


mongoose.connect("mongodb://127.0.0.1:27017/weatherDB", {
  useNewUrlParser: true,
})
.then(()=>console.log("conneted to DB"))
.catch((err)=> console.log(err))

const port = 3030
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

