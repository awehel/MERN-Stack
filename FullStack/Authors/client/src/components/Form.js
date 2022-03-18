import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
    
    const {submitHandler, author, setAuthor} = props

    const inputHandler = (e)=>{
        let newStateObject = {...author}
        newStateObject[e.target.name] = e.target.value
        console.log(e.target.name, e.target.value)
        setAuthor(newStateObject)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Name: </label>
                <input onChange={inputHandler} name="name" value={author.name} type="text" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Form;
