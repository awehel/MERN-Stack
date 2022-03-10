import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = ()=>{
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()

        axios.post('http://localhost:8000/api',{
            title,
            price,
            description
        })
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setDescription("")
            setPrice(0)
            setTitle("")
        })
        .catch(err=>console.log(err))
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

        </div>
    );
}

export default ProductForm