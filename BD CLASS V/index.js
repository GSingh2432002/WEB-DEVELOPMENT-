const express = require("express");
const app = express();
const port = 3000;

//Adding middleware
app.use(express.json()); //To parse the incoming requests with JSON payloads

//get request
app.get("/", (req,res) => {
    res.send(`<h1>This is Heading</h1>`);
})

//post request
app.post("/car",(req,res) => {
    res.send("Received a post request");
});

app.listen(port, () => {
    console.log("App Started");
})