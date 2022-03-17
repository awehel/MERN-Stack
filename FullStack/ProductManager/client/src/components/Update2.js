import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProductForm2 from './ProductForm2'

const Update2 = (props)=>{

    const {id} = useParams()

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${id}`)
        .then(res=>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setLoaded(true)
        })
        .catch(err=>console.log(err))
    }, [])

    const updateProduct = (product) =>{
        
        axios.put(`http://localhost:8000/api/update/${id}`, {title, price, description})
        .then(res=>{
            console.log(res.data)
            console.log("Updated submitted")
            navigate("/home")
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Update a product</h1>
            {loaded && (
                <ProductForm2 
                onSubmitProp = {updateProduct}
                initialTitle = {title}
                initialPrice = {price}
                initialDescriptiom = {description}
                />
            )}
            
        </div>
    );

}

export default Update2