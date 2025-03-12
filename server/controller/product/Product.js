const connection = require("../../config/connection");

const getProductData = (req, res) => {
  const sql =
    "SELECT * FROM product ORDER BY id DESC";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data from product Table:", error);
      return res.status(500).send("Error fetching product data");
    }
    return res.json(result);
  });
};

const getProductDataWithId = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM product WHERE id=${id}`;
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data from product Table:", error);
      return res.status(500).send("Error fetching product data");
    }
    return res.json(result);
  });
};

const addProductData = (req, res) => {
  try {
    const { brand_id, cate_id, slogan, name, description, price, discount, memory, storage, status } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    // Check if brand_id exists
    const brandCheckSql = "SELECT id FROM brand WHERE id = ?";
    connection.query(brandCheckSql, [brand_id], (brandError, brandResult) => {
      if (brandError) {
        console.log("Error Checking brand_id: ", brandError);
        return res.status(500).send("Error checking brand_id");
      }
      if (brandResult.length === 0) {
        return res.status(400).send("Invalid brand_id. Brand does not exist.");
      }

      // Check if cate_id exists
      const cateCheckSql = "SELECT id FROM category WHERE id = ?";
      connection.query(cateCheckSql, [cate_id], (cateError, cateResult) => {
        if (cateError) {
          console.log("Error Checking cate_id: ", cateError);
          return res.status(500).send("Error checking cate_id");
        }
        if (cateResult.length === 0) {
          return res.status(400).send("Invalid cate_id. Category does not exist.");
        }

        
        const sql =
          "INSERT INTO product (brand_id, cate_id, slogan, name, description, price, discount, memory, storage, image, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const data = [brand_id, cate_id, slogan, name, description, price, discount, memory, storage, imagePath, status];

        connection.query(sql, data, (error) => {
          if (error) {
            console.log("Error Adding product Data: ", error);
            return res.status(500).send("Error adding product data");
          }
          return res.sendStatus(200);
        });
      });
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};


const deleteProduct = (req, res) => {
  try {
    const id = req.params.id;
    const sql = `DELETE FROM product WHERE id= ${id}`;

    connection.query(sql, (error) => {
      if (error) {
        console.log("Error Deleting product Data: ", error);
        return res.status(500).send("Error deleting product data");
      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

const editProductData = (req, res) => {
  try {
    const id = req.params.id;
    const { brand_id, cate_id, slogan, name, description, price, discount, memory, storage, status } = req.body;
    const imagePath = req?.file?.filename;

    let sql = "";
    let data = [];

    if (imagePath) {
      sql =
        "UPDATE product SET brand_id=?, cate_id=?, slogan=?, name=?, description=?, price=?, discount=?, memory=?, storage=?, image=?, status=? WHERE id=?";
      data = [brand_id, cate_id, slogan, name, description, price, discount, memory, storage, imagePath, status, id];
    } else {
      sql =
        "UPDATE product SET brand_id=?, cate_id=?, slogan=?, name=?, description=?, price=?, discount=?, memory=?, storage=?, status=? WHERE id=?";
      data = [brand_id, cate_id, slogan, name, description, price, discount, memory, storage, status, id];
    }

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Updating product Data: ", error);
        return res.status(500).send("Error updating product data");
      }
      return res.sendStatus(200);
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};


module.exports = { getProductData, addProductData, getProductDataWithId, editProductData, deleteProduct };
