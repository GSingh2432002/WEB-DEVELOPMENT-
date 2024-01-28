
//Server Instantiate
const express = require('express');
const app = express();

//used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//Specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

//activate the server on 3000 port 
app.listen(3000,() => {
    console.log("Server Started at port no. 3000")
}); 
 
//Routes
app.get('/', (request,response) => {
    res.send("helo jee kaise ho sab");
})

app.post('/api/cars', (request,response) => {
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Cars Submitted Successfully.")
})


const mongoose = require('mongoose');

//connecting with MongoDB database using Mongoose ODM
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{console.log("Connection Successful")})
.catch((error) =>{console.log("Received an error")});