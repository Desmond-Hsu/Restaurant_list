// require packages
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// rotues setting
app.get('/', (req, res) => {
  res.render('index')
})

// start and listen on the Express server 
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})