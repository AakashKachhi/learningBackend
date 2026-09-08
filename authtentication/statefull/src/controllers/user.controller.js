import { registerUser , loginUser } from "../services/user.service.js"

export const signup = async(req, res) => {
    const {username, password} = req.body

    try {
        const user = await registerUser(username, password)
        res.status(201).json({
            success: true,
            message: "User register successfully",
            data: user
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "error in sign up",
            error: error.message
        })   
    }
}

export const login = async(req, res) => {
    const {username , password} = req.body

    try {
        
        const user = await loginUser(username, password)
    
        // save user id in session
        req.session.userId = user._id
    
        res.status(200).json({
            success: true,
            message: "User logged In Successful",
        })

    } catch (error) {
        res.status(403).json({
            success: false,
            message: "error in logging user",
            error: error.message
        })
    }
}

export const logout = async(req, res) => {}