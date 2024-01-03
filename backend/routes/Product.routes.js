const { express } = require("../imports/modules.imports")
const { ProductModel } = require("../imports/models.imports")
const { authorize } = require("../imports/middleware.imports")


const { addProductIntoCart, removeProductFromCart, getProductController, addProductIntoWishlist, removeProductFromWishlist, getCartController, getWishListController } = require("../imports/controllers.imports")


const productRoutes = express.Router();

productRoutes.route('/').get(getProductController);
productRoutes.route("/cart/:ID").post(authorize, addProductIntoCart)
productRoutes.route("/cart/:ID").delete(authorize, removeProductFromCart)

productRoutes.route("/wishlist/:ID").post(authorize, addProductIntoWishlist)
productRoutes.route("/wishlist/:ID").delete(authorize, removeProductFromWishlist)

productRoutes.route("/cart").get(authorize,getCartController)
productRoutes.route("/wishlist").get(authorize,getWishListController)



module.exports = { productRoutes }