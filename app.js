import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
// import cors from "cors";

export const app = express();

// var cors = require("cors");

config({
  path: "./data/config.env",
});

//Using middleware
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//     optionSuccessStatus: 200,
//   })
// );

//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Nice bro");
});

//using error middleware
app.use(errorMiddleware);
