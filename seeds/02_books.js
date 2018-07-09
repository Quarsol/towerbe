exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {image: 'url', title: 'first1', author: 'last1', year: '1996', pages: '356'},
        {image: 'url2', title: 'first2', author: 'last2', year: '2004', pages: '294'},
        {image: 'url3', title: 'first3', author: 'last3', year: '2018', pages: '142'},
      ]);
    })
};
