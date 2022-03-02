import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Form = (props)=>{

    const {searchParam, setSearchParam}  = props

    const {paramId, setParamId} = props

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()

        
        navigate(`/${searchParam}/${paramId}`);
    }

    return (
        <div className=''>
            
            

            <form onSubmit={submitHandler}>
                <div className='input-group w-50 mx-auto text-center p-2 my-2 align-items-center'>

                <label>Search for:</label>
                <select
                    className="form-control border border-3 mx-3"
                    onChange={(e) => setSearchParam(e.target.value)}
                >
                    <option value="" >
                        Select an option
                    </option>
                    <option value="people" name="searchParam">
                        People
                    </option>
                    <option value="planets" name="searchParam">
                        Planets
                    </option>
                   
                </select>
                <label>ID:</label>
                <input
                    type="number"
                    name="paramId"
                    className="form-control border border-3 mx-3"
                    onChange={(e) => setParamId(e.target.value)}
                />
                <button className="btn btn-primary">Search</button>
                </div>
            </form>
            
        </div>
    );
}

export default Form