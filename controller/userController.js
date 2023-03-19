import { json } from "express";
import User from "../model/user.js";

export const createUser= async(req,res) => {
    const {firstName, lastName, email, password, cPassword}= req.body;
    try{
        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            cPassword,
        });
        res.send({
            message:"User Created!",
            createdUser: user,
        });
    }
    catch(err){
        console.log(err);
        res.status(400).send({message: "Error creating user", error: JSON.stringify(err)});
    }
};
