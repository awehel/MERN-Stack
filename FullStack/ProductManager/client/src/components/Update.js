import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Update = (props)=>{

    const {id} = useParams()

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
        .then(res=>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err=>console.log(err))
    }, [])

    const updateProduct = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`, {title, price, description})
        .then(res=>{
            console.log(res)
            console.log("Updated submitted")
            navigate("/home")
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Update a product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        name="title"
                        value={title}
                    />
                </p>
                <p>
                    <label>Price: </label>
                    <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        name="price"
                        value={price}
                    />
                </p>
                <p>
                    <label>Description: </label>
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        value={description}
                    />
                </p>
                <input type="submit" />
            </form>
            {/* <Link to="/home">Home</Link> */}
        </div>
    );

}

export default Update