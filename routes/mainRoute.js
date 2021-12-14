const express = require('express')
const path = require('path')
const mainRoute = express.Router()

mainRoute.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = mainRoute;