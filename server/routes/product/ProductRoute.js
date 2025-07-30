const express = require("express");
const router = express.Router();
const Product = require("../../controller/product/Product");
const upload = require("../../middleware/multer"); // update this to export .array

// Update here: allow multiple image uploads (up to 10 files)
router.route("/getproductdata").get(Product.getProductData);
router.route("/getproductdatawithid/:id").get(Product.getProductDataWithId);
router.route("/addproductdata").post(upload.array("images", 8), Product.addProductData);
router.route("/editproductdata/:id").put(upload.array("image", 8), Product.editProductData);
router.route("/deleteproductdata/:id").delete(Product.deleteProduct);

module.exports = router;
