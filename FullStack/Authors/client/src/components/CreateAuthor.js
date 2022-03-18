import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import Navbar from "./Navbar";

const CreateAuthor = (props) => {
    
    const {authorList, setAuthorList} = props
    const [newAuthor, setNewAuthor] = useState({name: "",})
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
        .catch((err)=>console.log(err))
    }


    
    return (
        <div>
            <Navbar/>
            <Form author={newAuthor} setAuthor={setNewAuthor} submitHandler={newHandler}/>
        </div>
    );
};

export default CreateAuthor;
