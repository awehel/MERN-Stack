import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useParams, Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const NotFound = (props) => {
    

    return (
        <div>
            <Navbar />
            <div>
                <h2>This url does not exist</h2>
                <Link to="/new"><p>Create a new author here</p></Link>
                
            </div>
        </div>
    );
};

export default NotFound;
