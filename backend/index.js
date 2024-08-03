import express from "express"

import { PORT } from "./config.js"

const app = express()

app.get('/', (req, res, next) => {
    return res.json({text: "ciao"})
})

app.listen(PORT, (req, res, next) => {
    console.log("Server Listening on port:", PORT)
})
