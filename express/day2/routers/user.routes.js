import { Router } from "express";

const userRouter = Router();

userRouter.get("/createUser", (req, res) => {
    res.send("User Page");
});

userRouter.get("/getAllUser", (req, res) => {
    res.send("Get All Users");
});

userRouter.get("/getUserById", (req, res) => {
    res.send("Get user by Id");
});

export default userRouter;