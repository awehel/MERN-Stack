import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import Navbar from "./Navbar";
import { set } from "mongoose";

const UpdateAuthor = (props) => {
    
    const [name, setName] = useState("");
    const [updatedAuthor, setUpdatedAuthor] = useState({name: ""})
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
        .then((res)=>{
            console.log(res.data.name)
            setName(res.data.name)
        })
        .catch((err)=>console.log(err))
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        const updateData = {name}
        axios
            .put(`http://localhost:8000/api/edit/${id}`, updateData)
            .then((res) => {
                // console.log("Submitted: " + name);
                // console.log(updateData)
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response);
                setErrors(err.response.data.errors);
                console.log(errors)
            });
    };

    return (
        <div>
            <Navbar />
            
            <div>
                <form onSubmit={updateHandler}>
                <div className="mb-3 row justify-content-center">
                    <label className=" col-sm-2 col-form-label">Name: </label>
                    <div className="col-sm-4">
                        <input onChange={(e)=>setName(e.target.value)} name="name" value={name} type="text" className="form-control"/>
                    </div>
                </div>
                {
                    errors.name?
                    <p className="text-danger">{errors.name.message}</p>
                    :null
                }
                <input type="submit" value="Submit"className="btn btn-primary"/>
            </form>
            <Link to="/" className="btn btn-success my-3">Home</Link>
            </div>

        </div>
    );
};

export default UpdateAuthor;
