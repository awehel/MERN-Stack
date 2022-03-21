import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DeleteButton = (props)=>{

    const {id, successCallback} = props

    const navigate = useNavigate()
    // const {id} = useParams

    const deleteAuthor = ()=>{
        console.log(id)
        axios.delete(`http://localhost:8000/api/${id}`)
        .then((res)=>{
            if(successCallback){
                console.log(res.data);
                successCallback()
            }
            else{
                console.log(res.data)
                navigate('/')

            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <button className='btn btn-danger' onClick={deleteAuthor}>
            Delete
        </button>
    )

}

export default DeleteButton