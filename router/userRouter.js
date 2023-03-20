import { Router } from "express";
import { createUser, loginAuthentication } from "../controller/userController.js";

const userRouter = Router();

userRouter.route("/signup").post(createUser);
userRouter.route("/login").get(loginAuthentication);

export default userRouter;