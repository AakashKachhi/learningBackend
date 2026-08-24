import express from "express"
import session from "express-session"

import authRoute from "./routes/auth.route.js"
import taskRoute from "./routes/task.route.js"

const app = express()
const PORT = 3000


// Global Middlewares
app.use(express.json())
app.use(session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000*60*60*24 // day1
    }
}))

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Task Manager API")
})


app.use("/auth", authRoute)
app.use("/task", taskRoute)

app.listen(PORT, () => {
    console.log("Sever is listening on Port 3000")
})