import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import ProductForm2 from '../components/ProductForm2'

const Main = (props)=>{
    
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then((res)=>{
            setProducts(res.data)
            setLoaded(true)
        })
    }, [])

    const removeFromDom = (productId)=>{
        setProducts(products.filter(product => product._id !== productId))
    }

    const createProduct = (product)=>{
        axios.post('http://localhost:8000/api', product)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setProducts([...products, res.data])
        })
    }

    return (
        <div>
            <ProductForm2 onSubmitProp={createProduct} initialPrice="" initialTitle="" initialDescription=""/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
            
        </div>
    )

}

export default Main