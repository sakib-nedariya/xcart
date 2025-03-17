const connection = require("../../config/connection");

const getCustomerData = (req, res) => {
  const sql = "SELECT * FROM user ORDER BY id DESC";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data user Table in server.js" + error);
    }
    return res.json(result);
  });
};

const getCustomerDataWithId = (req, res) => {
  const id = req.params.id
  const sql = `SELECT * FROM user WHERE id=${id}`;
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data user Table in server.js" + error);
    }
    return res.json(result);
  });
};

const addCustomerData = (req, res) => {
  try {
    const { first_name, middle_name, last_name, user_name, email, mobile_number, dob, address, password, status } = req.body;
    const imagePath = req.file ? req.file.filename : null;
    const sql = "INSERT INTO user (first_name, middle_name, last_name, user_name, profile, email, mobile_number, dob, address, password, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const data = [first_name, middle_name, last_name, user_name, imagePath, email, mobile_number, dob, address, password, status];

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Adding user Data in server.js: ", error);
        return res.status(500).send("Error adding user data");

      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

const deleteCustomer = (req, res) => {
  try {
     
    const id = req.params.id;
    const sql =  `DELETE FROM user WHERE id= ${id}`

    connection.query(sql, (error) => {
      if (error) {
        console.log("Error Adding user Data in server.js: ", error);
        return res.status(500).send("Error adding user data");

      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
}

const editCustomerData = (req, res) => {
  try {
    const id = req.params.id;
    const { first_name, middle_name, last_name, user_name, email, mobile_number, dob, address, password, status } = req.body;
    const imagePath = req?.file?.filename;

    // Declare sql and data outside the if-else blocks
    let sql = '';
    let data = [];

    if (imagePath) {
      sql = "UPDATE user SET first_name=?, middle_name=?, last_name=?, user_name=?, profile=?, email=?, mobile_number=?, dob=?, address=?, password=?, status=? WHERE id=?";
      data = [first_name, middle_name, last_name, user_name, imagePath, email, mobile_number, dob, address, password, status, id];
    } else {
      sql = "UPDATE user SET first_name=?, middle_name=?, last_name=?, user_name=?, email=?, mobile_number=?, dob=?, address=?, password=?, status=? WHERE id=?";
      data = [first_name, middle_name, last_name, user_name, email, mobile_number, dob, address, password, status, id];
    }

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Updating user Data in server.js: ", error);
        return res.status(500).send("Error updating user data");
      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};


module.exports = { getCustomerData, addCustomerData, getCustomerDataWithId, editCustomerData, deleteCustomer };
