const express = require('express')
const connection = require('../public/scripts/dbconnection.js')
const utilizadorRoute = express.Router()

utilizadorRoute.post('/', (req,res) => {
    console.log(req.body)
})

module.exports = utilizadorRoute