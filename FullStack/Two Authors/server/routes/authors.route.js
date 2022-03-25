const AuthorController = require("../controllers/authors.controller")

module.exports = (app) =>{
    app.get("/api", AuthorController.getAllAuthors)
    app.get("/api/:id", AuthorController.getOneAuthor)
    app.post("/api", AuthorController.createAuthor)
    app.put("/api/edit/:id", AuthorController.updateAuthor)
    app.delete("/api/:id", AuthorController.deleteAuthor)
}