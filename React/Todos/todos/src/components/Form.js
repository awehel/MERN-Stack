import React, {useState} from "react";

const Form = (props)=>{

    const {todoList, setTodoList} = props
    const [listItem, setListItem] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        setTodoList([...todoList, {
            listItem: listItem,
            id: Math.floor(Math.random()*10000).toString(),
            completed: false
        }
        ])
        setListItem("")
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={(e)=>setListItem(e.target.value)} type='text' value={listItem}/>
                <button>Add</button>


            </form>
        </div>
    )
}

export default Form