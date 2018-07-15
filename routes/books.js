const express = require('express')
const router = express.Router()
const query = require('../db/query.js')

router.get('/', (req, res, next) => {
  query.getBooks()
  .then(books =>{
    return res.json({ books })
  }).catch(next)
})

router.delete("/:id", (request, response, next) => {
    query.deleteBook(request.params.id)
    .then(() => {
        query.getBooks()
        .then(books => {
        console.log('insidedelete', books)
        response.json({books})
        })
}).catch(next);
})

// router.delete("/:id", (request, response, next) => {
//     query.deleteBook(request.params.id).then(() => {
//         response.sendStatus(204);
//     }).catch(next);
// });

router.post("/", (request, response, next) => {
        query.createBook(request.body).then(book => {
        response.status(201).json({book: book});
    }).catch((error)=> {
        console.log(error)
        next()
    } );
});

router.put("/:id", (request, response, next) => {
    query.updateBook(request.params.id, request.body).then(book => {
        response.json({book: book[0]});
    }).catch(next);
});

module.exports = router
