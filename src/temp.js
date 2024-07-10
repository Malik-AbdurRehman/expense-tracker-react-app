import { useState } from "react";
import React from "react";

const App=()=>{

    const [task,setTask]=useState("Play Cricket", "Play PUBG");
    const [newTask,setNewTask]=useState("");

    const handleinput=(e)=>{
        setNewTask(e.target.value);
    }

    const addTask=()=>{
        setTask (t=>[...t,newTask]);
    }

    const deleteTask=(index)=>{

    }

    return(
        <>
        <h1>To Do List</h1>
        <input type="text" placeholder="Enter Task..." onChange={handleinput}></input>
        <button onClick={addTask}>Add</button>
        <ol>
            {task.map((task,index)=>
            <li key={index}>
                <span>{task}</span>
                <button onClick={deleteTask(index)}>
                    Delete
                </button>
            </li>
            )}
        </ol>
        </>
    );
}
export default App;