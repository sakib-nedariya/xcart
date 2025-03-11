const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());  // For JSON payloads
app.use(express.urlencoded({ extended: true }));  // For form-data payloads
app.use(bodyParser.json());  // For JSON payloads (can actually remove this, as express.json() does the same)

const ManageAdminRoute = require("./routes/admin/ManageAdminRoute.js");

app.use("/", ManageAdminRoute);

const CustomerRoute = require("./routes/customer/CustomerRoute.js");

app.use("/", CustomerRoute);

const CouponRoute = require("./routes/coupon/CouponRoute.js");

app.use("/", CouponRoute);

const BrandRoute = require("./routes/brand/BrandRoute.js");

app.use("/", BrandRoute);

const CategoryRoute = require("./routes/category/CategoryRoute.js");

app.use("/", CategoryRoute);

const ProductRoute = require("./routes/product/ProductRoute.js");

app.use("/", ProductRoute);

app.get("/", (req, res) => {
  return res.json("XCART server");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}`);
});
