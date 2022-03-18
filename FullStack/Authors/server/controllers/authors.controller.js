const Author = require('../models/authors.model')

module.exports = {

    createAuthor: (req, res)=>{
        Author.create(req.body)
        .then((newAuthor)=>{
            console.log(newAuthor)
            res.json(newAuthor)
        })
        .catch((err)=>{
            console.log("createAuthor has failed")
            res.json({message:"Something went wrong in createAuthor", error:err})
        })
    },
    
    getAllAuthors: (req, res)=>{
        Author.find({})
        .then((allAuthors)=>{
            console.log(allAuthors)
            res.json(allAuthors)
        })
        .catch((err)=>{
            console.log("getAllAuthors has failed")
            res.json({message:"Something went wrong in getAllAuthors", error:err})
        })
    },

    getOneAuthor: (req, res)=>{
        Author.findById({_id: req.params.id})
        .then((oneAuthor)=>{
            console.log(oneAuthor)
            res.json(oneAuthor)
        })
        .catch((err)=>{
            console.log("getOneAuthor has failed")
            res.json({message:"Something went wrong in getOneAuthor", error:err})
        })
    },

    updateAuthor: (req, res)=>{
        Author.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((updatedAuthor)=>{
            console.log(updatedAuthor)
            res.json(updatedAuthor)
        })
        .catch((err)=>{
            console.log("updateAuthor has failed")
            res.json({message:"Something went wrong in updateAuthor", error:err})
        })
    },

    deleteAuthor: (req, res)=>{
        Author.deleteOne({_id:req.params.id})
        .then((deletedAuthor)=>{
            console.log(deletedAuthor)
            res.json(deletedAuthor)
        })
        .catch((err)=>{
            console.log("deleteAuthor has failed")
            res.json({message:"Something went wrong in deleteAuthor", error:err})
        })
    }

}