/**
 *  Project: REST API
 *  Author: Imtiaz Adar
 *  Components: Node JS, Express JS, MongoDB
 */

const express = require("express");
const router = express.Router();
const {showAllUser, getOneUser, addUser, updateUser, deleteUser} = require("../controller/user.controller");

router.get("/userlist", showAllUser);

router.get("/getOne/:id", getOneUser);

router.post("/addUser", addUser);

router.put("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);

module.exports = router;