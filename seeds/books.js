exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, image: 'url', title: 'first1', author: 'last1', year: '1996', pages: '356'},
        {id: 2, image: 'url2', title: 'first2', author: 'last2', year: '2004', pages: '294'},
        {id: 3, image: 'url3', title: 'first3', author: 'last3', year: '2018', pages: '142'},
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('books_id_seq', (SELECT MAX(id) FROM books));"
      );
    });
};
