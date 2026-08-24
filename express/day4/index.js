import cookieParser from "cookie-parser"
import express from "express"
import session from "express-session"


const app = express()

app.use(express.json())
app.use(session(
    {
        secret: "sdkjlasd",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000*60*60*24
        }
    }
))
app.use(cookieParser("aakash"))



app.get("/", (req, res) => {
    res.status(200).send("Hello World")
    console.log(req.session)
    console.log(req.session.id)
})

app.get("/login", (req, res) => {
    req.session.user = {
        name: "Aakash",
        email: "aakash@gmail.com"
    }

    res.status(200).send(`${req.session.user.name} has logIn the session`)
})

app.get("/logout", (req, res) => {
    req.session.destroy()

    res.send("User has been logOut")
})

app.listen(3000, () => {
    console.log("Server is running on Port 3000")
})