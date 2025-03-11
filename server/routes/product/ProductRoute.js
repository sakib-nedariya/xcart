const express = require("express");
const router = express.Router();
const Product = require("../../controller/product/Product");
const upload = require('../../config/middleware')

router.route("/getproductdata").get(Product.getProductData);
router.route("/getproductdatawithid/:id").get(Product.getProductDataWithId);
router.route("/addproductdata").post(upload.single("image"), Product.addProductData);
router.route("/editproductdata/:id").put(upload.single("image"), Product.editProductData);
router.route("/deleteproductdata/:id").delete(Product.deleteProduct);


module.exports = router;
