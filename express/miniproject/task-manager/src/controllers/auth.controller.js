export const login = (req, res) => {
    const {username} = req.body
    
    if(!username){
        return req.status(400).json({error: "Please Enter the username"})
    }

    req.session.user = {username}
    res.cookie("username", username, {httpOnly: true, maxAge: 1000*60*60*24 })
    res.status(200).json({message: "Login Successful", username})
}

export const logout = (req, res) => {
    res.clearCookie("username")
    req.session.destroy(((err) => {
        if(err) {
            return res.status(500).json({error: "Error in logout"})
        }
        res.json({message: "Logout Successful"})
    }))
}