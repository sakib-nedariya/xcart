const express = require("express");
const router = express.Router();
const ManageAdmin = require("../../controller/admin/ManageAdmin");
const upload = require('../../config/middleware')

router.route("/getadmindata").get(ManageAdmin.getAdminData);
router.route("/addadmindata").post(upload.single("profile"), ManageAdmin.addAdminData);;

module.exports = router;
