const { signupController, loginController } = require("../controllers/Auth.controller")
const { addProductIntoCart, removeProductFromCart, getProductController, addProductIntoWishlist, removeProductFromWishlist, getCartController, getWishListController } = require("../controllers/Product.controller")

module.exports = { signupController, loginController, addProductIntoCart, removeProductFromCart, getProductController, addProductIntoWishlist, removeProductFromWishlist, getCartController, getWishListController }