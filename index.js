require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoString = process.env.DATABASE_URL;
const mongoose = require("mongoose");

mongoose
    .connect(mongoString)
    .then(() => console.log("connected to Mongo Db"))
    .catch((error) => console.error("MongoDb connection erorr", error));

const app = express();
app.use(cors());
app.use(express.json());
const routes = require("./routes/routes");
app.use("/api", routes);
app.listen(8080, () => {
    console.log(`server Started at ${8080}`);
})

module.exports = app;