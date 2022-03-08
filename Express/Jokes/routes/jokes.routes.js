const JokeController = require("../controllers/jokes.controller")

module.exports = (app) =>{
    app.get("/api/jokes", JokeController.findAll)
    app.post("/api/jokes", JokeController.createJoke)
    app.get("/api/jokes/:id", JokeController.findOneJoke)
    app.put("/api/jokes/:id", JokeController.updateJokes)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)

}