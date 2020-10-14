const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send(' Hello world ')
  })

app.get('/test', (req, res) => {
    res.send(' Hello world using test ')
  })
app.get('/srivasavi', (req, res) => {
    res.send(' Hello from srivasavi! ')
  })
  
  app.listen(3333, () => {
    console.log(`Listening on port 3333!`)
  })
