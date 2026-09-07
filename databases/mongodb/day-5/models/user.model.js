import {Schema , model  } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        maxLength: 40
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number
    },
    createAt: {
        type: Date,
        default: Date.now
    }

})

const userModel = model("User", userSchema)

export default userModel;