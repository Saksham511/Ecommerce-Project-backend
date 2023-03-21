import { Router } from "express";
import { createUser, loginAuthentication } from "../controller/userController.js";
import userSchema from "../schemas/user.js";
import validateData from "../middleware/validation.js";

const userRouter = Router();

userRouter.route("/signup").post(validateData(userSchema), createUser);
userRouter.route("/login").post(loginAuthentication);

export default userRouter;
