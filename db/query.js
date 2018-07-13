const knex = require('./knexConfig.js')

function getBooks(){
  return knex('tower')
    .select()
    .from('books')
    .orderBy('id', 'desc')
}

function getProfile(){
  return knex('tower')
    .select()
    .from('profile')
    .orderBy('id', 'desc')
}

function deleteBook(id){
    return knex('tower')
      .select()
      .from('books')
      .delete()
      .where("id", id);
}

function createBook(book){
    return knex('tower')
      .select()
      .from('books')
      .insert(book)
      .returning("*")
      .then(record => record[0])
}

function updateBook(id, book){
    return knex('tower')
      .select()
      .from('books')
      .where('id', id)
      .update(book)
      .returning("*")
      .then(record => record[0])
}

module.exports = {
  getBooks,
  getProfile,
  deleteBook,
  createBook,
  updateBook
}
