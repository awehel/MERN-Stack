import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
    return(
        <div>
            <h1>Favorite Authors</h1>
            
            <p>
            <Link to="/">Home</Link>
            <span> </span>         
            <Link to="/new">New Author</Link>

            </p>
        </div>
    ) 
};

export default Navbar;
