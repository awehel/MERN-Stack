import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const Detail = (props) =>{

    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/" + id)
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

    return (
        <div>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link to="/home">Home</Link>
        </div>
    )
}


export default Detail