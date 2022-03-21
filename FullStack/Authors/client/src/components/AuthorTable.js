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
    }, [setAuthorList])

    const removeFromDom = (authorId) => {
        setAuthorList(authorList.filter((author) => author._id !== authorId));
    };
    
    return (
        <div className="container mx-auto my-3">
            <table className="table table-striped w-50 mx-auto table-bordered">
                <thead>
                    <tr className="table-dark">
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList?
                            authorList.map((author, index)=>(
                            <tr key={index}>
                                <td><Link to={`/author/${author._id}`}>{author.name}</Link></td>
                                <td><Link to={`/edit/${author._id}`} className="btn btn-success">Edit</Link> | <span> </span>   
                                {/* <Link to='/'>Delete</Link>  */}
                                <DeleteButton id={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
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
