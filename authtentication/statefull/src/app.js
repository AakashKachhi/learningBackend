import express from "express"
import session from "express-session"
import dotenv from "dotenv"

import userRoutes from "./routes/user.route.js"
import taskRoutes from "./routes/task.route.js"

dotenv.config()

const app = express()

app.use(express.json())

// session config
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:600000}  // 10 mints
}))

//* Routes

app.get("/", (req, res) => {
    res.send("hello world")
})
app.use("/api/user", userRoutes)
app.use("/api/task", taskRoutes)

export default app