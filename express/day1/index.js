import express from "express";
import usersData, { data } from "./data/data.js"
const app = express();
app.use(express.json())

const PORT = 8080;


// 1. Get Request (it is for fetching data from server)

app.get("/", (req, res) => {
    res.status(200).send("Hello")
})


// Industry Standards
app.get("/api/v1/users", (req, res) => {
    // Query Params
    const {name} =req.query;

    if(name) {
        const user = usersData.filter((user) => {
            return user.name === name
        })
        res.status(200).send(user)
    }



    res.status(200).send(usersData)  
})


// router params
app.get("/api/v1/users/:id", (req, res) => {
    const {id} = req.params;
    const parseId = parseInt(id);

    const user = usersData.find((user) => user.id === parseId)

    res.status(200).send(user)
})



// 2. POST Request (it is for sending data to server)

app.post("/api/v1/users", (req, res) => {
    const {name, displayname} = req.body;

    const newUser = {
        id:usersData.length + 1,
        name,
        displayname
    }
    
    usersData.push(newUser)

    res.status(201).send({
        message: "User Created",
        data: newUser
    })
})


// 3. PUT Request (UPDATE ALL FIELDS)

app.put("/api/v1/users/:id", (req, res) => {
    const {body, params: {id}} = req;

    const parseId = parseInt(id);
    const userIndex = usersData.findIndex((user) => user.id === parseId)

    if(userIndex === -1){
        res.status(404).send("User not Found")
    }

    usersData[userIndex] = {
        id: parseId,
        ...body
    }

    res.status(201).send({
        message: "User Updated",
        data: usersData[userIndex]
    })
})

// 4. PATCH Request (UPDATE SPECIFIC FIELD)

app.patch("/api/v1/users/:id", (req, res) => {
    const {body, params: {id}} = req;

    const parseId = parseInt(id);
    const userIndex = usersData.findIndex((user) => user.id === parseId)

    if(userIndex === -1){
        res.status(404).send("User not Found")
    }

    usersData[userIndex] = {
        ...usersData[userIndex], 
        ...body
    }

    res.status(201).send({
        message: "User Updated",
        data: usersData[userIndex]
    })
})

// 5. DELETE Request (it is for deleting data on server)

app.delete("/api/v1/users/:id", (req, res) => {
    const {body, params: {id}} = req
    const parseId = parseInt(id)

    const user = usersData.findIndex((user) => user.id === parseId)
    
    if(user === -1){
        return res.status(404).send("User not Found")
    }

    usersData.splice(user, 1)

    res.status(200).send({
        message: "User Delete",
        usersData
    })
})


app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`);
})