const authors = require('../controllers/authors.js');
const path = require('path');
module.exports = (app) => {
    // Get all authors
    app.get('/authors', authors.all);
    // Get one author by ID
    app.get('/authors/:id', authors.getOneById);
    // Create a new author
    app.post('/authors/create', authors.create);
    // Update a author by ID, passing in data
    app.put('/authors/:id', authors.update);
    // Delete a author by ID
    app.delete('/authors/:id', authors.delete);
    // Catchall for malformed requests
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
}
