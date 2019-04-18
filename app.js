const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.use(express.static('public'))

app.get('/',(req,res) => {
  res.render('index')
})

app.get('/bio',(req,res) => {
  res.render("bio")
})

app.get('/shop',(req,res) => {
  res.render("shop")
})

app.get('/contact',(req,res) => {
  res.render("contact")
})

app.get('/gallery',(req,res) => {
  res.render("gallery")
})

app.listen(3000,() => {
  console.log("We are up and running")
})
