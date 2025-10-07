/**
 *  Project: REST API
 *  Author: Imtiaz Adar
 *  Components: Node JS, Express JS, MongoDB
 */

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    CreatedOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("UserList", userSchema);