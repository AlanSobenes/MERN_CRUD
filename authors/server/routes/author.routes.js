const authorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/authors', authorController.getAllAuthors)
    app.get('/api/authors/:id', authorController.getOneAuthor)
    app.post('/api/authors', authorController.createAnAuthor)
    app.put('/api/authors/:id', authorController.updateOldAuthor)
    app.delete('/api/authors/:id', authorController.deleteAuthor)
}