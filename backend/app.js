const express = require("express");
const app = express();

const Routetasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notfound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", Routetasks);
app.use(notfound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
