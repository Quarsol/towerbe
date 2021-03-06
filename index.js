const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
const books = require('./routes/books.js')
const profile = require('./routes/profile.js')

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(bodyParser.json())

app.use('/books', books)

app.use('/profile', profile)


app.listen(port, () => console.log('Example app listening on port ' + port))
