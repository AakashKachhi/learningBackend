import express from "express";

const PORT = 8080;
const app = express();


// 1. Global middleware
function SayHiMiddleware(req, res, next) {
    console.log("Hi I am middleware");
    next()
}

// app.use(SayHiMiddleware)


// 2. Specific Routes Middleware

app.get("/hi", SayHiMiddleware ,(req, res) => {
    res.send("Hello Aakash");
});


// 3. Inbuilt Middleware




app.get("/", (req, res) => {
    res.send("Hello Aakash");
});

app.get("/user", (req, res) => {
    res.send("User Page")
})

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`);
})