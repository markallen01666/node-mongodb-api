// Node MongoDB API
// Implementation of a simple API using Node, Express, MongoDB Atlas and Mongoose
// M Allen - 2019

const express = require('express')
const app = new express()
const mongoose = require('mongoose')
const Offices = require('./models/Offices.js')
const Employees = require('./models/Employees.js')

// controllers
const getOfficesController = require('./controllers/getOfficesController')
const getEmployeesController = require('./controllers/getEmployeesController')

// connect database
mongoose.connect('mongodb+srv://53ptolemy8607:n6SkRDlbTED6kPZN@cluster0-wvhp3.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('/', (req, res) => {
  res.json(data)
})

// Port allocation and default for Heroku commit
let port = process.env.PORT
if (port == null || port == '') {
  port = 4000
}
app.listen(port, () => {
  console.log(`Simple Node API started - listening on port: ${port}`)
})
