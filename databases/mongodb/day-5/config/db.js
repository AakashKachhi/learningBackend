import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/school")
        console.log(`Database Connected ${conn.connection.host}`)
    } catch (error) {
        console.log("Error in Database connection", error.message)

        process.exit(1)
    }
}

export default connectDB