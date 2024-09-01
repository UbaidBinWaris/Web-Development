const exp = require("express");
const bp = require("body-parser")
const app = exp();


app.use(bp.urlencoded({ extended: true }));

app.get("/",function(req , res){
    res.send("Hello to my Web Application");
});

app.get("/sum",function(req , res){
    res.sendFile(__dirname + "/calculator.html");
});
app.post("/",function(req , res){
    res.send("The SUM is : "  + (Number(req.body.num1) + Number(req.body.num2)));
});

app.get("/product",function(req , res){
    res.sendFile(__dirname + "/calculator.html");
});
app.post("/product",function(req , res){
    res.send("The SUM is : "  + (Number(req.body.num1) * Number(req.body.num2)));
});

app.listen(3000);