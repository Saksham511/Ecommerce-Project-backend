import { json } from "express";
import User from "../model/user.js";

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, cPassword } = req.body;
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.send({
      status: 409, 
      message: "This Email Already Exist. Please Login" });
  }
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      cPassword,
    });
    res.send({
      status: 100,
      message: "User Created!",
      createdUser: user,
    });
  } catch (err) {
    console.log(err);
    res
      .send({ 
        status: 400,
        message: "Error creating user",
        error: JSON.stringify(err) });
  }
};

export const loginAuthentication = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user) {
      if (password == user.password) {
        res.send({ 
          status: 101,
          message: "User Authenticated", 
          authenticatedUser: user });
      }
      else {
        res.send({ 
          status: 200,
          message: "Wrong Password!" });
      }
    }
    if (!user) {
      console.log("User not found !");
      res.send({ 
        status: 404,
        message: "User not found !" });
    }
  } catch (err) {
    console.log(err);
    res.send({ 
      status: 400,
      message: "Error ! ",
      error: JSON.stringify(err) });
  }
};
