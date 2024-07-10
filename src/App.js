import React from "react";
import { useState } from "react";

const App=()=>
{
    const[task,setTask]=useState(['Wake Up', 'Have Breakfast', 'Play Cricket']);
    const[newTask,setNewTask]=useState("");

    const handleNewTask=(e)=>{
        setNewTask(e.target.value);
    }
    const addTask=()=>{
        if(newTask!=="")
        {
            setTask(t=>[...t,newTask]);
        }
    }
     const deletetask=(index)=>{
        const updatedTasks = task.filter((element,i)=> i!==index)
        setTask(updatedTasks);
     }
    return(
        <>
        <h1>To Do List</h1>
        <input placeholder="Enter Task" onChange={handleNewTask}></input>
        <button onClick={addTask}>Add</button>

        <ol>
            {task.map((task,index)=>
            <li key={index}>
                <span>{task}</span>
                <button onClick={()=>deletetask(index)}>Delete</button>
            </li>
            )}
        </ol>
        </>
    )
}
export default App