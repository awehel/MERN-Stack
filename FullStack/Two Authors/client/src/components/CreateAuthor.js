import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import Navbar from "./Navbar";

const CreateAuthor = (props) => {
    
    const {authorList, setAuthorList} = props
    const [newAuthor, setNewAuthor] = useState({
        authorName: "",
        type: "",
        age: "",
        auror: false,
        newt: ""
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const newHandler = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api`, newAuthor)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            // setAuthorList([...authorList], res.data)
            // setNewAuthor({
                
            // })
            navigate('/')
        })
        .catch((err)=>{
            console.log(err.response)
            console.log(err.response.data)
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    const inputHandler = (e) => {
        let newStateObject = { ...newAuthor };
        if(e.target.name === "auror"){
            newStateObject[e.target.name] = e.target.checked
            console.log(e.target.checked)
            setNewAuthor(newStateObject)
        }
        else{
            newStateObject[e.target.name] = e.target.value;
            console.log(e.target.name, e.target.value);
            setNewAuthor(newStateObject);
        }
    };
    
    
    return (
        <div>
            <Navbar/>
            <Form 
                author={newAuthor} 
                setAuthor={setNewAuthor} 
                submitHandler={newHandler} 
                inputHandler={inputHandler} 
                errors={errors}
                buttonText={"Create"} 
            />
        </div>
    );
};

export default CreateAuthor;
