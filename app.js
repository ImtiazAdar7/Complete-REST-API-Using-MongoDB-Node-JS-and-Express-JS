/**
 *  Project: REST API
 *  Author: Imtiaz Adar
 *  Components: Node JS, Express JS, MongoDB
 */

const express = require("express");
const app = express();
const userRouter = require(".//routes/user.route");
require("./config/database");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.status(200).send("<h1>This is the homepage</h1>");
});

app.use((req, res, next) => {
    res.status(404).json({ message: "404 Error!!!" });
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ message: "Server Error!!!" });
})

module.exports = app;