require('../Lecture37/appMongoose');
const express=require('express');
const Task=require('../Lecture38/models/Task');
const port=3000;
const app=express();

app.use(express.json());

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

app.get("/get-tasks",async(req,res)=>{
    const taskList=await Task.find();
    return res.status(200).send(taskList);
});

app.put("/update-task/:taskId",async(req,res)=>{
    const {taskId}=req.params;
    const updateResult=await Task.updateOne(
        {_id:taskId}, 
        {
            $set:{...req.body},
        }
    );
    if(!updateResult.matchedCount){
        return res.status(404).send({message:`Task with id: ${taskId} was not found`});
    }
    return res.status(200).send({message:"Updated"});
});

app.delete("/delete-task/:taskId",async(req,res)=>{
    const {taskId}=req.params;
    const deleteResult=await Task.deleteOne({_id:taskId});
    if(!deleteResult.deletedCount){
        return res.status(404).send({message:`Task with id: ${taskId} was not`});
    }
    return res.status(200).send({message:"Delete Success"});
});

app.listen(port,()=>{
    console.log("Server is running on port "+port);
});