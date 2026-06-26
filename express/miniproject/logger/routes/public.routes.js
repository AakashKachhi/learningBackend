import express from "express";
import { generateToken } from "../utils/tokenutils.js";

const router = express.Router();


router.get("/generateToken", (req, res) => {
    const token = generateToken();

    res.status(200).send({
        message: "Token generate please save them for future",
        token: token
    })
});

router.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to the Home Page"
    })
})

export default router;