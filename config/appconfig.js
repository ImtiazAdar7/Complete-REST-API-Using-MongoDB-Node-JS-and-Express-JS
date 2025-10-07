/**
 *  Project: REST API
 *  Author: Imtiaz Adar
 *  Components: Node JS, Express JS, MongoDB
 */

const config = require("dotenv").config();

const dev = {
    app: {
        PORT: process.env.PORT || 4000
    },
    database:{
        URL: "mongodb://localhost:27017"
    },
}

module.exports = dev;