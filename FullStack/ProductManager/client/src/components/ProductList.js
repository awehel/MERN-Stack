import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props)=>{

    const {removeFromDom, product, setProduct} = props

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

    const deleteProduct = (productId) =>{
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then(res=>removeFromDom(productId))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h2>All Products</h2>
            {
                product.map((product, index)=>{
                    return (
                        <div key={index}>
                            <Link to={`/home/${product._id}`}><p key={index}>{product.title}</p></Link>
                            <Link to={`/home/edit/${product._id}`}>Edit {product.title}</Link>
                            <div>
                                <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>

                            </div>
                            <br></br>
                         </div>

                    )
                    
                })
            }
        </div>
    )
}

export default ProductList;