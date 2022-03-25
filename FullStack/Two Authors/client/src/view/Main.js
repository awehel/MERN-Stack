import React, {useState, useEffect} from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import AuthorTable from "../components/AuthorTable"
import Navbar from "../components/Navbar"

const Main = (props)=>{

    const [authorList, setAuthorList] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8000/api")
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err) => console.log(err));
    }, [setAuthorList]);

    return(
        <div>
            <Navbar/>
            <AuthorTable authorList={authorList} setAuthorList={setAuthorList}/>
        </div>
    )
}

export default Main