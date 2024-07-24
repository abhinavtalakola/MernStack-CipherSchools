require('../Lecture37/appMongoose');
const express=require('express');
const Task=require('../Lecture38/models/Task');
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

app.post("/add-task",async(req,res)=>{
    const task=new Task({title:"Test Task", description: "Test Task Desc"});
    await task.save();
    return res.status(201).send({message:"Saved"})
});

app.listen(port,()=>{
    console.log("Server is running on port "+port);
});