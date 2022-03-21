import React, {useEffect, useState} from "react"
import axios from "axios"
import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import DeleteButton from "./DeleteButton"


const OneAuthor = (props)=>{

    const [oneAuthor, setOneAuthor] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
        .then((res)=>{
            console.log(res.data)
            setOneAuthor(res.data)
        })
        .catch((err)=>console.log(err))
    }, [id])


    return(
        <div>
            <Navbar />
            <div>
                <h2>{oneAuthor.name}</h2>
                <DeleteButton id={id}/>
            </div>
        </div>
    )
}

export default OneAuthor