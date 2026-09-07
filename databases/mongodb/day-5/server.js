import express from "express"

import connectDB from "./config/db.js"
import userRouter from "./routes/user.route.js"

const PORT = 3000

const app = express()

// Connect to DB
connectDB()

app.use(express.json())
app.use("/api/", userRouter)


app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log("Server is running on Port 3000")
})

