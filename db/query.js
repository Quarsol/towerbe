const knex = require('./knexConfig.js')

function getBooks(){
  return knex('tower')
    .select()
    .from('books')
    .orderBy('id', 'desc')
}

module.exports = {
  getBooks
}
