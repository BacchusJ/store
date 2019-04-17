const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.get('/',(req,res) => {
  res.render('index')
})

app.listen(3000,() => {
  console.log("We are up and running")
})
