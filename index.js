// const express = require('express');
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// app.listen(4001, console.log("Server is listening at port: 4001"));
app.listen(process.env.PORT, console.log(`Server is listening at port: ${process.env.PORT}`));

console.log ("Hello from backend ecommerce !");