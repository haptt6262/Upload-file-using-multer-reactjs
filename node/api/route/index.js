const ItemController = require('../controller/index')

const Routes = (app) => {
    app.route("/items").get(ItemController.getItem).post(ItemController.addItem)
        .put(ItemController.updateItem).delete(ItemController.deleteImage)
    app.route("/items/:id").delete(ItemController.deleteItem)
    app.route("/search-pagination").get(ItemController.searchPaginationItem)
}
module.exports = Routes