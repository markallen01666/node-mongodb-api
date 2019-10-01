// Node MongoDB API
// Implementation of a simple API using Node, Express, MongoDB Atlas and Mongoose
// M Allen - 2019

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// controllers
const getOfficesController = require('./controllers/getOfficesController')
const getEmployeesController = require('./controllers/getEmployeesController')

// connect database
mongoose.connect('mongodb+srv://haleon55:gyc2eivi16mrejC7@cluster0-wvhp3.mongodb.net/company1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error => {
  console.log(`Mongoose connection error: ${error}`)
}))

app.get('/employees', getEmployeesController)
app.get('/offices', getOfficesController)

// Port allocation and default for Heroku commit
let port = process.env.PORT
if (port == null || port == '') {
  port = 4000
}
app.listen(port, () => {
  console.log(`Simple Node API started - listening on port: ${port}`)
})
