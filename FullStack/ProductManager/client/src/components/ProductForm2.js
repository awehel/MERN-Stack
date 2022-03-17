import React, {useState} from 'react'
import axios from 'axios'

const ProductForm2 = (props)=>{
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const submitHandler = (e)=>{
        e.preventDefault()
        onSubmitProp({title, price, description})
    }

    return (
        <div>
            <h1>Product Form</h1>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title: </label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price: </label>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <button>Create Product</button>
            </form>
            <hr/>
        </div>
    );
}

export default ProductForm2