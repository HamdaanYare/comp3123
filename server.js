const express = require("express")

const app = express()

const SERVER_PORT = 8083


app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})


//Path Parameter
//http://localhost:8083/user
app.post("/user/:firstname/:lastname", (req, res) => {
    const firstName = req.params.firstname
    const lastName = req.params.lastname

    res.send({
        firstName,
        lastName
    })
})

//Query Parameter
//http://localhost:8083/user?firstname=mohamed&lastname=Abdiwahab
app.get("/user", (req, res) => {
    const firstName = req.query.firstname
    const lastName = req.query.lastname

    res.send({
        firstName,
        lastName
    })
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})