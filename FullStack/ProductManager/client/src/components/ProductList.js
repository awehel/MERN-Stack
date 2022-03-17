import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductList = (props)=>{

    const {removeFromDom, products, setProducts} = props

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then((res)=>{
            console.log(res)
            setProducts(res.data)
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
                products.map((product, index)=>{
                    return (
                        <div key={index}>
                            <Link to={`/home/${product._id}`}><p key={index}>{product.title}</p></Link>
                            <Link to={`/home/edit/${product._id}`}>Edit {product.title}</Link>
                            <div>
                                <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />

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