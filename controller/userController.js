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
    }
    catch(err){
        console.log(err);
    }
};