import express from "express"

import { authenticationToken } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.get("/", authenticationToken, (req, res) => {
    res.status(200).json({message: "Welcome to private route", user:req.user})
})


export default router