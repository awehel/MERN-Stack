import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";


const AuthorTable = (props) => {
    
    const {authorList, setAuthorList} = props

    useEffect(()=>{
        axios
            .get("http://localhost:8000/api")
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const removeFromDom = (authorId) => {
        setAuthorList(authorList.filter((author) => author._id !== authorId));
    };
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList?
                            authorList.map((author, index)=>(
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td><Link to={`/edit/${author._id}`}>Edit</Link> | <Link to='/'>Delete</Link> <DeleteButton id={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
                            </tr>
                        
                        ))
                        :null
                    }

                        
                    
                </tbody>
            </table>
        </div>
    );
};

export default AuthorTable;
