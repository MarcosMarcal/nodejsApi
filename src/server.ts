import "reflect-metadata"
import "../database/db" 
import express from "express"
import { router } from "./routes"

const app = express()



app.get("/healthCheck", (req, res) => {
    console.log("...healthCheck... running...")
    return res.send("Hello, NLW!")
}) 


app.use(express.json())
app.use(router)
app.listen(3000, () => console.log("Server is running... "))
