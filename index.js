const express = require('express')
var cors = require('cors')
const app = express()
const knex = require('./knex')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/books', function (req, res) {
  knex.select('image', 'title', 'author', 'year', 'pages').from('books').then((books)=> {
    res.send(books)
  })
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
