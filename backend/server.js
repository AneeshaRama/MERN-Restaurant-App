const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const connectDatabase = require("./utils/database");
const app = express();

require("dotenv").config();

connectDatabase();

app.use(bodyParser.json());
app.use(cors());

readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
