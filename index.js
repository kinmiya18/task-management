const express = require("express");
const app = express();
const database = require("./config/database");
require("dotenv").config();
const port = process.env.PORT;

const routesApiV1 = require("./api/v1/routes/index.route");
database.connect();

routesApiV1(app);

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
