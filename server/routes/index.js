const express = require("express");
const app = express.Router();

const ManageAdminRoute = require("../routes/admin/ManageAdminRoute.js");
const CustomerRoute = require("../routes/customer/CustomerRoute.js");
const CouponRoute = require("../routes/coupon/CouponRoute.js");
const BrandRoute = require("../routes/brand/BrandRoute.js");
const CategoryRoute = require("../routes/category/CategoryRoute.js");
const ProductRoute = require("../routes/product/ProductRoute.js");
<<<<<<< HEAD
const userLoginRoute = require("../routes/user/UserAccountDetailsRoutes.js");
const userAdminRoute = require("../routes/user/userAdminRoute.js")
=======
const userLoginRoute = require("../routes/user/UserRoutes.js");
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88

app.use("/", ManageAdminRoute);
app.use("/", CustomerRoute);
app.use("/", CouponRoute);
app.use("/", BrandRoute);
app.use("/", CategoryRoute);
app.use("/", ProductRoute);
app.use("/", userLoginRoute);
<<<<<<< HEAD
app.use("/", userAdminRoute);
=======
>>>>>>> 5e9d71c978b8d9b26fb0e8dcea8a09bc863a0a88


module.exports = app