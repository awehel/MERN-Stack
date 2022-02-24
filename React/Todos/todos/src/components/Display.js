import React, { useState } from "react";

const Display = (props) => {
    
    const{todoList, setTodoList} = props
    
    const deleteButton = (idFromBelow)=>{
        setTodoList(todoList.filter((todo, index)=>todo.id !== idFromBelow))
    }

    const handleCompleted =(todoFromBelow)=>{
        todoFromBelow.completed = !todoFromBelow.completed
        setTodoList([...todoList])
    }

    const styled = (completed)=>{
        if(completed === true){
            return "completed"
        }
        else{
            return "incomplete"
        }
    }

    return(
        <div>
            {
                todoList.map((todo, index)=>(
                    <div key={index}>
                        <p className={styled(todo.completed)}>{todo.listItem}</p>
                        <input onClick={()=>handleCompleted(todo)} type="checkbox" />
                        <button onClick={()=>deleteButton(todo.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    ) 
        
};

export default Display;
