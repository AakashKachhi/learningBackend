import express from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

import User from "../models/user.model.js"

dotenv.config()

const router = express.Router()

router.post("/signup", async(req, res) => {
    const {username, password} = req.body

    try {
        const existingUser = await User.findOne({username})

        if(existingUser) return res.status(400).json({success: false, message: "User already Exists"})

        const newUser = new User({username , password})

        await newUser.save()

        res.status(201).json({success: true, message: "Sign Up successful", data: newUser})
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error.message})
    }
})

router.post("/login", async(req, res)  => {
    const {username , password } = req.body 

    try {
        const user = await User.findOne({username})

        if(!user) return res.status(400).json({message: "Invalid Username or Password"})

        const isMatch = await user.comparePassword(password)
        if(!isMatch) return res.status(400).json({message: "Invalid Username or Password"})

        // Creating a token using jwt 

        const token = jwt.sign({id:user._id, username: user.username}, process.env.JWT_SECRET, {expiresIn: "1h"})

        res.status(200).json({message: "Login Successful", token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error.message})
    }

})


export default router