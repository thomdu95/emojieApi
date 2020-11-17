const express = require("express")
const cors = require("cors")
const fs = require("fs")

let api = express()

api.use(express.json())
// api.use(express.bodyParser({ extended: true}))
api.use(cors())

api.get("/all", (req, res) => {
    const content = fs.readFileSync("./emojies.json")
    console.log(JSON.parse(content));
    res.json(JSON.parse(content))

})

api.listen("8080", () => {
    console.log("Api  listen on http://localhost:8080")
})