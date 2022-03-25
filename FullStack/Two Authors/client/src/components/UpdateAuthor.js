import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import Navbar from "./Navbar";


const UpdateAuthor = (props) => {
    
    const [editAuthor, setEditAuthor] = useState({
        authorName: "",
        type: "",
        age: 0,
        auror: false,
        newt: ""
    });
    
    const [errors, setErrors] = useState([])
    
    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
        .then((res)=>{
            console.log(res.data)
            setEditAuthor(res.data)
        })
        .catch((err)=>console.log(err))
    }, [id])

    const updateForm = (e) => {
        e.preventDefault();
        
        axios.put("http://localhost:8000/api/edit/" + id, editAuthor)
            
            .then((res) => {
                console.log("Submitted: " + editAuthor.name);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(errors);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    const inputHandler = (e) => {
        let newStateObject = { ...editAuthor };
        if (e.target.name === "auror") {
            newStateObject[e.target.name] = e.target.checked;
            console.log(e.target.checked);
            console.log("Newstateobject: ", newStateObject)
            setEditAuthor(newStateObject);
        } else {
            newStateObject[e.target.name] = e.target.value;
            console.log(e.target.name, e.target.value);
            setEditAuthor(newStateObject);
        }
    };

    return (
        <div>
            <Navbar />
            <Form
                submitHandler={updateForm}
                inputHandler={inputHandler}
                author={editAuthor}
                errors={errors}
                buttonText={"Update author"}
            />
        </div>
    );
};

export default UpdateAuthor;
