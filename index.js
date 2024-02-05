const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
const port = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/Dashrath").then(()=>
console.log("mongoDB connected")
);
// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Routes
app.use("api//user", userRouter);

app.listen(port, () => console.log(`Server started on the port No ${port}`));
