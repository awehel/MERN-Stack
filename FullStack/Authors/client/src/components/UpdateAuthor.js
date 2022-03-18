import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import Navbar from "./Navbar";

const UpdateAuthor = (props) => {
    
    const [updatedAuthor, setUpdatedAuthor] = useState({ name: "" });
    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
        .then((res)=>{
            console.log(res.data)
            setUpdatedAuthor(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/edit/${id}`, 
            updatedAuthor)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
                
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Navbar />
            <Form
                author={updatedAuthor}
                setAuthor={setUpdatedAuthor}
                submitHandler={updateHandler}
            />
        </div>
    );
};

export default UpdateAuthor;
