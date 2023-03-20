import { json } from "express";
import User from "../model/user.js";

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, cPassword } = req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      cPassword,
    });
    res.send({
      message: "User Created!",
      createdUser: user,
    });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .send({ message: "Error creating user", error: JSON.stringify(err) });
  }
};

export const loginAuthentication = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password == user.password) {
        res.send({ message: "User Authenticated", authenticatedUser: user });
      } else {
        res.status(200).send({ message: "Wrong Password!" });
      }
    } else {
      console.log("User not found !");
      res.status(404).send({ message: "User not found !" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Error ! ", error: JSON.stringify(err) });
  }
};
