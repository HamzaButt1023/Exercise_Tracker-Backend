const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

connectToMongo();
const app = express();
const port = process.env.PORT || process.env.Port_App;
app.use(express.json());
app.use(cors());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/exercise", require("./routes/exercise"));

app.listen(port, () => {
    console.log(
        `Exercise Tracker listening at ${process.env.hostName}${process.env.Port_App}`
    );
});