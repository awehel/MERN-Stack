const Product = require('../models/product.model')

module.exports = {
    createProduct : (req, res)=>{
        Product.create(req.body)
        .then((newProduct)=>{
            console.log(newProduct)
            res.json(newProduct)
        })
        .catch((err)=>{
            console.log("createProduct failed")
            res.json({message: "Something went wrong with createProduct", error:err})
        })
    },
    findOneProduct : (req, res)=>{
        Product.findOne({_id: req.params.id})
        .then((oneProduct)=>{
            console.log(oneProduct)
            res.json(oneProduct)
        })
        .catch((err)=>{
            console.log("findOneProduct failed")
            res.json({ message: "Something went wrong with findOneProduct", error:err });
        })
    },
    findAllProducts : (req, res)=>{
        Product.find()
        .then((allProducts)=>{
            console.log(allProducts)
            res.json(allProducts)
        })
        .catch((err)=>{
            console.log("findAllProducts failed")
            res.json({message: "Something went wrong with findAllProducts", error:err})
        })
    }
}