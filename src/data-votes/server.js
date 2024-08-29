import 

const express = require('express')
const db = require('./db')
const app = express()
app.use(express.urlencoded({ extended: true })); 

app.post(`/${}`)

const PORT = process.env.PORT || 3001;
app.listen(PORT);