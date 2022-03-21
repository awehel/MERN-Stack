import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
    
    const {submitHandler, author, setAuthor, errors, setErrors} = props


    const inputHandler = (e)=>{
        let newStateObject = {...author}
        newStateObject[e.target.name] = e.target.value
        console.log(e.target.name, e.target.value)
        setAuthor(newStateObject)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3 row justify-content-center">
                    <label className=" col-sm-2 col-form-label">Name: </label>
                    <div className="col-sm-4">
                        <input onChange={inputHandler} name="name" value={author.name} type="text" className="form-control"/>
                    </div>
                </div>
                {
                    errors.name?
                    <p className="text-danger">{errors.name.message}</p>
                    :null
                }
                <input type="submit" value="Submit"className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default Form;
