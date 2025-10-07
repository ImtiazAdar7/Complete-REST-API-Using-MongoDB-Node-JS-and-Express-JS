/**
 *  Project: REST API
 *  Author: Imtiaz Adar
 *  Components: Node JS, Express JS, MongoDB
 */

const config = require("./appconfig");

const mongoose = require("mongoose");
const databaseURL = config.database.URL + "/UserDatabase";

mongoose.connect(databaseURL).then(()=>{
    console.log("Mongoose is connected");
}).catch((err)=>{
    console.log("Database is not connected");
})

module.exports = databaseURL;