import express, { response } from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("secret"))


app.get("/", (req, res) => {
  // !. How to set it
  res.cookie("userId", "99", {
    marAge: 1000 * 60 * 60 * 24,
    signed: true
  })

  res.send("Hello, World!");
});

app.get("/product", (req, res) => {
  console.log("cookie:", req.cookies)
  console.log("Signed cookies:", req.signedCookies)

  if(req.cookies.name && req.cookies.name === "express") {
    res.status(200).send({
      id: 1,
      name: "Item1",
      price: "$100"
    })
  }
  res.status(403).send("You are not authorized")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});