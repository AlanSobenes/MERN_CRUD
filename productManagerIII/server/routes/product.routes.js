const productsController = require("../controllers/product.controller");


module.exports = (app) => {
    app.get('/api/products', productsController.getAllProducts)
    app.get('/api/products/:id', productsController.getOneProduct)
    app.post('/api/products', productsController.createAProduct)
    app.put('/api/products/:id', productsController.updateOldProduct)
    app.delete('/api/products/:id', productsController.deleteProduct)
}