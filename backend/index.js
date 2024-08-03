import express from "express"
import mongoose from "mongoose"

import { PORT, mongoDBURL } from "./config.js"

const app = express()

app.get('/', (req, res, next) => {
    return res.json({text: "ciao"})
})


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to DataBase")
        app.listen(PORT, (req, res, next) => {
            console.log("Server Listening on port:", PORT)
        })
    })
    .catch(error => console.error(error))