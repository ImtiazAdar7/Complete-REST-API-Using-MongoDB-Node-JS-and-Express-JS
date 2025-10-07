/**
 *  Project: REST API
 *  Author: Imtiaz Adar
 *  Components: Node JS, Express JS, MongoDB
 */

const config = require("./config/appconfig");
const cors = require("cors");
const app = require("./app");

const PORT = config.app.PORT;

app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});