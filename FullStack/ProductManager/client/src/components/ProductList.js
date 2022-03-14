import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props)=>{

    const {product, setProduct} = props

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

    return (
        <div>
            <h2>All Products</h2>
            {
                product.map((product, index)=>{
                    return (
                        <div>
                            <Link to={`/home/${product._id}`}><p key={index}>{product.title}</p></Link>
                            {/* <p key={index}>Price: {product.price}</p>
                            <p key={index}>Description: {product.description}</p> */}
                            
                         </div>

                    )
                    
                })
            }
        </div>
    )
}

export default ProductList;