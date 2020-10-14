const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send(' Hey , i am  Sri Vasavi ..This is my express app ')
  })
  
  app.listen(3333, () => {
    console.log(`Listening on port 3333!`)
  })