const express = require("express");
const app = express();
const port = process.env.PORT || 5000

app.get("/", (req,res)=> {
    res.send("This is server 33333")
})

app.listen(5000, ()=> {
    console.log("Server Running on Port 5000")
})