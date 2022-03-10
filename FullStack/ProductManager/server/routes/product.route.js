const ProductController = require("../controllers/product.controller")

module.exports = (app)=>{
    app.get("/api", ProductController.findAllProducts)
    app.get("/api/:id", ProductController.findOneProduct)
    app.post("/api", ProductController.createProduct)
}