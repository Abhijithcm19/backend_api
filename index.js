const express = require("express");
const dotenv = require("dotenv").config();
const contactRouter = require("./router/contactRouter");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection")

connectDb();
const app = express();

const port = 5000;


app.use(express.json());
app.use("/api/contacts",contactRouter)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
