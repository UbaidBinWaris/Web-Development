const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello World");
});

app.get("/about", function(req, res){
    res.send("I am a Full stack Developer");
});

app.get("/contact", function(req, res){
    res.send("+923186659417 is my persoal phone number");
});

app.listen(3000 , function(){
    console.log("Server is running on port 3000");
})