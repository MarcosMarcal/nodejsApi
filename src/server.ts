import express from "express"
// yarn add @types/express -D 

const app = express()

app.get("/healthCheck", (req, res) => {
    console.log("...healthCheck... running...")
    return res.send("Hello, NLW!")
})

app.listen(3000, () => console.log("Server is running... "))