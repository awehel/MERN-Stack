const Movie = require("../models/movie.model");

//We are exporting an object of key value pairs.
//The Key being how we're referring to our calls
// And the Call itself (arrow func), being the value!
//We can easily access these in the movie.routes.js

module.exports = {
    findAllMovies: (req, res) => {
        Movie.find()
            .then((allMovies) => {
                console.log(allMovies);
                res.json(allMovies);
            })
            .catch((err) => {
                console.log("findAllMovies has failed!");
                res.json({
                    message: "Something went wrong in findAll",
                    error: err,
                });
            });
    },

    createNewMovie: (req, res) => {
        Movie.create(req.body)
            .then((newMovie) => {
                console.log(newMovie);
                res.json(newMovie);
            })
            .catch((err) => {
                console.log("Something went wrong in createNewMovie");
                //We set the response status of 400 to
                //display our err, which is the rejection of our promise.

                //A 400 status means our client is talking
                //to our server just fine, but the client isn't sending good info.

                //This is how we will eventually display
                //our validations from the server in react!

                //A 404 status error means the client's
                //request isn't to the right place or your server is not set up properly

                //On the flip-side, a status of 200 means we are looking good!
                res.status(400).json(err);
            });
    },

    findOneMovie: (req, res) => {
        //We use the paramater's (params) or the client's request to search for a
        //specific document by the field (here _id) specified
        Movie.findOne({ _id: req.params.id }) //the params id MUST MATCH how we write it in our routes!!!
            .then((oneMovie) => {
                console.log(oneMovie);
                res.json(oneMovie);
            })
            .catch((err) => {
                console.log("Find One Movie failed");
                res.json({
                    message: "Something went wrong in findOneMovie",
                    error: err,
                });
            });
    },

    deleteOneMovie: (req, res) => {
        Movie.deleteOne({ _id: req.params.id })
            .then((deletedMovie) => {
                console.log(deletedMovie);
                res.json(deletedMovie);
            })
            .catch((err) => {
                console.log("delete One Movie failed");
                res.json({
                    message: "Something went wrong in deleteOneMovie",
                    error: err,
                });
            });
    },

    updateMovie: (req, res) => {
        //This Mongoose query requires both a parameter AND body from the request!
        Movie.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            { new: true, runValidators: true }
        )
            .then((updatedMovie) => {
                console.log(updatedMovie);
                res.json(updatedMovie);
            })
            .catch((err) => {
                console.log("Something went wrong in createNewMovie");
                res.status(400).json(err); //See above (explained in create)
            });
    },
};
