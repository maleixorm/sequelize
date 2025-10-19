const express = require('express')
const epxhbs = require('express-handlebars')
const conn = require('./db/conn')
const User = require('./models/User')


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

conn
.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))