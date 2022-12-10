const express = require('express')
const app = express()
const router = express.Router()
require('dotenv').config()
const cors = require('cors')
const connectDB =  require('../config/db')
const serverless = require('serverless-http')
const path = require('path')

app.use(cors())

connectDB()

app.use(express.json())



app.use('/.netlify/functions/api/user', require('../routes/userAuth'));
app.use('/.netlify/functions/api/drivers',require('../routes/driversRoute'))
app.use('/.netlify/functions/api/tractors',require('../routes/tractorsRoute'))
app.use('/.netlify/functions/api/plows',require('../routes/plowsRoute'))


app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));



module.exports = app;
module.exports.handler = serverless(app)