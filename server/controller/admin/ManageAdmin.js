const connection = require("../../config/connection");

const getAdminData = (req, res) => {
  const sql = "SELECT * FROM admin";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data Brand Table in server.js" + error);
    }
    return res.json(result);
  });
};

const addAdminData = (req, res) => {
  try {
    const { first_name, middle_name, last_name, user_name, email, mobile_number, dob, password, status } = req.body;
    const imagePath = req.file ? req.file.originalname : null;
    const sql = "INSERT INTO admin (first_name, middle_name, last_name, user_name, profile, email, mobile_number, dob, password, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const data = [first_name, middle_name, last_name, user_name, imagePath, email, mobile_number, dob, password, status];

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Adding Admin Data in server.js: ", error);
        return res.status(500).send("Error adding Admin data");

      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { getAdminData, addAdminData };
