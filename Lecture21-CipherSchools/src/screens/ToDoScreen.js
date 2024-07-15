// import {Component} from "react";

import {useState} from "react";
import Task from "../components/Task";

/*
class ToDoScreen extends Component{
    state={
        taskCount:0,
    }
    render(){
        return(
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <button onClick={(e)=>{
                    this.setState({...this.state,taskCount:this.state.taskCount+1});
                    console.log(this.state.taskCount);
                }} 
                className="ui secondary button">Add Task</button>
                <p>The number of tasks are: {this.state.taskCount}</p>
            </div>
        );
    }
}
*/

const ToDoScreen = () => {
    const [taskList, setTaskList] = useState([]);

    return (
        <div className="screen">
            <h1 className="ui heading center">To Do List</h1>
            <div>
                <button
                    onClick={(e) => {
                        setTaskList([
                            ...taskList,
                            {
                                title: "Gym",
                                description: "Going to gym is good for health",
                                CreatedDate:new Date(),
                            },
                        ]);
                    }}
                    className="ui secondary button"
                >
                    Add Task
                </button>
                <section>
                <div class="ui cards">
                    {taskList.map((task,index) => (
                        <Task task={task} key={index}/>
                    ))}
                </div>
                </section>
            </div>
        </div>
    );
}

export default ToDoScreen;
