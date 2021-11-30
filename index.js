const express = require('express')
const path = require('path')
const app = express()
 
app.use(express.static('./public'))

 app.get('/', function (req, response) {
  response.sendFile(path.join(_dirname, '/public/index.html'))
}) 
 
const port = 5000;

app.listen(port, function (){
console.log("Lisenning on port: " + port)
})