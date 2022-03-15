import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Detail = (props) =>{

    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/" + id)
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(()=>{
                navigate("/home")
                console.log("Delete successful")
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <div>
                <button onClick={(e) => { deleteProduct(product._id)}}>
                    Delete
                </button>
            </div>
            <Link to="/home">Home</Link>
        </div>
    );
}


export default Detail