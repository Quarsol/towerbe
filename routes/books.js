const express = require('express')
const router = express.Router()
const query = require('../db/query.js')

router.get('/', (req, res, next) => {
  query.getBooks()
  .then(books =>{
    return res.json({ books })
  }).catch(next)
})

module.exports = router
