import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-3">
            <div className="container">
                <h2 className="text-light">Favorite Aurors</h2>
                 <div className="collapse navbar-collapse mx-3" id="navbarNavAltMarkup">
                     <Link to="/" className="mx-3 text-decoration-none text-warning fw-bold"><h5>Home</h5></Link>
                     <Link to='/new' className="mx-3 text-decoration-none text-warning fw-bold"><h5>New Auror</h5></Link>
                 </div>
            </div>
        </nav>
    ); 
};

export default Navbar;
