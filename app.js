const express = require("express");
const app = express();
const port = process.env.PORT || 3000

app.get("/", (req,res)=> {
    res.send("This is server1")
})
app.get("/about", (req,res)=> {
    res.send("This is about")
})
app.listen(port, ()=> {
    console.log(`Server Running on Port ${port} `)
})