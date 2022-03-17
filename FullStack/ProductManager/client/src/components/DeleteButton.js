import React from "react";
import axios from "axios";

const DeleteButton = (props)=>{
    const {productId, successCallback} = props
    
    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            successCallback()
        })
        .catch(err=>console.log(err))
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton