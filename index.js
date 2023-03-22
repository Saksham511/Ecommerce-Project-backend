// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/db.js";
import userRouter from "./router/userRouter.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(express.json());
app.use("/user", userRouter);
// app.listen(4001, console.log("Server is listening at port: 4001"));
app.listen(
  process.env.PORT,
  console.log(`Server is listening at port: ${process.env.PORT}`)
);

console.log("Hello from backend ecommerce !");
