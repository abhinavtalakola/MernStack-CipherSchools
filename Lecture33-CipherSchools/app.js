const express=require('express');
const port=3000;
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/add",(req,res)=>{
    let {a:firstNumber, b:secondNumber}=req.query;
    let sum=parseInt(firstNumber)+parseInt(secondNumber);
    res.send({sum});
});

app.listen(port,()=>{
    console.log("Server is running on port "+port);
});