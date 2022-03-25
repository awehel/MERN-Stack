import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";


const AuthorTable = (props) => {
    
    const {authorList, setAuthorList} = props
   

    const removeFromDom = (authorId) => {
        setAuthorList(authorList.filter((author) => author._id !== authorId));
    };

        
    return (
        <div className="container mx-auto my-3">
            <table className="table table-striped w-75 mx-auto table-bordered">
                <thead>
                    <tr className="table-dark">
                        <th>Author Name</th>
                        <th>Author Type</th>
                        <th>Author Age</th>
                        <th>Auror Status</th>
                        <th>NEWTS</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList?
                            authorList.map((author, index)=>(
                            <tr key={index}>
                                <td><Link to={`/author/${author._id}`}>{author.authorName}</Link></td>
                                <td>{author.type}</td>
                                <td>{author.age}</td>
                                <td>{
                                        author.auror?
                                        <span>Certified Auror</span>
                                        :<span>Not an Auror</span>
                                    }</td>
                                <td>{author.newt}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`} className="btn btn-success">Edit</Link> | <span> </span>   
                                    <DeleteButton id={author._id} successCallback={()=>removeFromDom(author._id)}/> 
                                </td>
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
