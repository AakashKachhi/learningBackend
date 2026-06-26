import express from "express";
import userRouter from "./routers/user.routes.js";

const PORT = 8080;
const app = express();

app.use("/api/v1/users", userRouter);



app.get("/", (req, res) => {
    res.send("Hello Aakash");
});



app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`);
})