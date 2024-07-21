import { useState } from "react";
import AddTask from "./components/Addtask";
import ToDoScreen from "./screens/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoScreen/>,
    },
    {
        path:"/add-task",
        element:<AddTask/>,
    }
])

const App=()=>{
    return <RouterProvider router={router}/>;
};

export default App;
