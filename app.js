const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const bullshit_generator = require('./bullshit_generator')

//set template-engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//set static files
app.use(express.static('public'))

//route setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/generate', (req, res) => {
  const bullshit = bullshit_generator(req.body)
  res.render('index', { bullshit: bullshit })
})



//listen and start server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})