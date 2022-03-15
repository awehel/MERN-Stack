const ProductController = require("../controllers/product.controller")

module.exports = (app)=>{
    app.get("/api", ProductController.findAllProducts)
    app.get("/api/:id", ProductController.findOneProduct)
    app.put("/api/update/:id", ProductController.updateProduct)
    app.post("/api", ProductController.createProduct)
    app.delete("/api/product/:id", ProductController.deleteProduct)
}