import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DeleteButton = (props)=>{

    const {id, successCallback} = props
    // const {id} = useParams

    const deleteAuthor = ()=>{
        console.log(id)
        axios.delete(`http://localhost:8000/api/${id}`)
        .then((res)=>{
            console.log(res.data)
            successCallback()
        })
        .catch(err=>console.log(err))
    }

    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )

}

export default DeleteButton