import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

import authRoutes from "./routes/auth.route.js"
import privateRoutes from "./routes/private.route.js"

dotenv.config()

const app = express()

app.use(express.json())

// config mongoose 
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Database connected"))
.catch((error) => console.error("Error in connecting database", error.message))

// Routes

app.use("/auth", authRoutes)
app.use("/private", privateRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost${process.env.PORT}`)
})