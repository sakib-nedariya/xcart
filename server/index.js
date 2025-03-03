const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const ManageAdminRoute = require("./routes/admin/ManageAdminRoute.js");

app.use("/", ManageAdminRoute);


app.get("/", (req, res) => {
  return res.json("XCART server");
});
dotenv.config();
app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}`);
});
