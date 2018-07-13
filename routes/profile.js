const express = require('express')
const router = express.Router()
const query = require('../db/query.js')

router.get('/', (req, res, next) => {
  query.getProfile()
  .then(profile =>{
    return res.json({ profile })
  }).catch(next)
})

module.exports = router
