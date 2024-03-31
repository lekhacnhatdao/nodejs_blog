
const path = require('path')
const express = require('express')
var morgan = require('morgan')
const hbs = require('express-handlebars')
const { Console } = require('console')
const app = express()
const port = 3000

const route = require('./routes/');

app.use(express.static(path.join(__dirname, 'public')))

//gui code bang submit
app.use(express.urlencoded({ extended: true }))
//gui code javascript
app.use(express.json())


//Template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//http logger
app.use(morgan('combined'))

//default __dirname: C:\New folder\nodejs_blog\src\
console.log('Path: ', path.join(__dirname, 'resource/views'))

//Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})