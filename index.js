const express = require('express')
const epxhbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.engine('handlebars', epxhbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000)