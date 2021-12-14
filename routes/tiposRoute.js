const express = require('express')
const connection = require('../public/scripts/dbconnection.js')
const tiposRoute = express.Router()

tiposRoute.get('/', function(req, res){
    connection.query('SELECT * FROM tipos', function(err, result) {
        if(err) {
            console.log('Erro: ' + err);
            throw err;
        }else {
            res.json(result);
        }
    })
})

module.exports = tiposRoute;