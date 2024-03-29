const express = require("express");
const {
  getAddress,
  addNewAddress,
  removeAddress,
  updateAddress,
} = require("../controllers/AddressController");
const {
  addToCart,
  removeFromCart,
  getCartProducts,
  removeAllFromCart,
  removeMultipleFromCart,
} = require("../controllers/CartController");
const { getOrders, addOrder } = require("../controllers/OrderController");
const {
  getProducts,
  getProductById,
  getProductsByCategory,
  getOfferProducts,
} = require("../controllers/ProductController");
const {
  signin,
  signup,
  signout,
  authentication,
} = require("../controllers/UserController");
const {
  addToWishlist,
  removeFromWishlist,
  getWishlistProducts,
  removeAllFromWishlist,
} = require("../controllers/WishlistController");

const router = express.Router();

// User routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.post("/authentication", authentication);

// Product routes
router.get("/getproducts", getProducts);
router.get("/getofferproducts", getOfferProducts);
router.get("/getproductbyid/:id", getProductById);
router.get("/getproductsbycategory/:category", getProductsByCategory);

// Cart routes
router.get("/getcartproducts/:userid", getCartProducts);
router.post("/addtocart", addToCart);
router.delete("/removefromcart/:id", removeFromCart);
router.delete("/removeallfromcart/:userid", removeAllFromCart);
router.delete("/removemultiplefromcart/:userid", removeMultipleFromCart);

// Wishlist routes
router.get("/getwishlistproducts/:userid", getWishlistProducts);
router.post("/addtowishlist", addToWishlist);
router.delete("/removefromwishlist/:id", removeFromWishlist);
router.delete("/removeallfromwishlist/:userid", removeAllFromWishlist);

// Address routes
router.get("/getaddress/:userid", getAddress);
router.post("/addnewaddress", addNewAddress);
router.put("/updateaddress/:id", updateAddress);
router.delete("/removeaddress/:id", removeAddress);

// Orders routes
router.get("/getorders/:id", getOrders);
router.post("/addorder", addOrder);

// Exporting router
module.exports = router;
