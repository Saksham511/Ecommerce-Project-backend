import { Router } from "express";
import { createUser, loginAuthentication } from "../controller/userController.js";

const userRouter = Router();

userRouter.route("/").post(createUser).get(loginAuthentication);

export default userRouter;