const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 1020;
const bodyParser = require("body-parser");


app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})