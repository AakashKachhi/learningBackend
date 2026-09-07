import express from "express"

import User from "../models/user.model.js"

const router = express.Router()

// CRUD

// Create
router.post("/users", async (req, res) => {
  try {
    const { name, age, weight } = req.body

    const newUser = new User({ name, age, weight })

    await newUser.save()

    res
      .status(201)
      .json({
        success: true,
        data: newUser,
        message: "Successfully User Created",
      })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Read
router.get("/users", async (req, res) => {
  try {
    const users = await User.find()

    res
      .status(200)
      .json({ success: true, data: users, message: "User gets successfully" })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Update
router.put("/update-user/:id", async (req, res)=> {
    const {id} = req.params
    const {name , age , weight} = req.body
    try {
        const updateUser = await User.findByIdAndUpdate(id, {name , age , weight}, {new: true, runValidators: true})

        if(!updateUser) {
            return res.status(401).json({success: false, message: "User not found"})
        }

        res.status(200).json({success: true, user: updateUser, message: "User updated successfully"})
    } catch (error) {
        res.status(500).json({success: false , message: error.message})
    }
})

// Delete
router.delete("/delete-user/:id", async(req, res)=> {
  const {id} = req.params

  try {
    const deleteUser = await User.findByIdAndDelete(id)

    if(!deleteUser) {
      return res.status(401).json({success: false, message: "User not found"})
    }

    res.json({success: true, message: "User Deleted Successfully"})
    
  } catch (error) {
    res.status(500).json({success: false , message: error.message})
  }
})

export default router
