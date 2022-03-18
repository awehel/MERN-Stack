import React, {useState, useEffect} from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import AuthorTable from "../components/AuthorTable"
import Navbar from "../components/Navbar"

const Main = (props)=>{

    const [authorList, setAuthorList] = useState([])

    return(
        <div>
            main
            <Navbar/>
            <AuthorTable authorList={authorList} setAuthorList={setAuthorList}/>
        </div>
    )
}

export default Main