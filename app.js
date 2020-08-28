const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

//set template-engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//route setting
app.get('/', (req, res) => {
  res.render('index')
})



//listen and start server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})