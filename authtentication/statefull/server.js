
import dotenv from "dotenv"

import app from "./src/app.js"
import { connectDB } from "./src/config/db.js"

dotenv.config()

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    })
}).catch((error) => {
    console.error("Error connecting Database", error.message)
})