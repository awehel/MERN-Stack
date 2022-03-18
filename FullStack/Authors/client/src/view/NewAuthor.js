import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";

import Navbar from "../components/Navbar";

const NewAuthor = (props) => {
    // [authorList, setAuthorList] = useState([])

    return (
        <div>
            New Author
            <Navbar/>
            <Form/>
        </div>
    );
};

export default NewAuthor;
