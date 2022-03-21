import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import Navbar from "./Navbar";

const CreateAuthor = (props) => {
    
    const {authorList, setAuthorList} = props
    const [newAuthor, setNewAuthor] = useState({name: "",})
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const newHandler = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api`, newAuthor)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            navigate('/')
            setAuthorList([...authorList], res.data)
            setNewAuthor({
                name:""
            })
        })
        .catch((err)=>{
            setErrors(err.response.data.errors)
            console.log(err.response)
            console.log(err.response.data)
            console.log(err.response.data.errors)
        })
    }


    
    return (
        <div>
            <Navbar/>
            <Form author={newAuthor} setAuthor={setNewAuthor} submitHandler={newHandler} errors={errors} setErrors={setErrors}/>
        </div>
    );
};

export default CreateAuthor;
