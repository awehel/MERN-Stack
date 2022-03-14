import React, {useState} from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'

const Main = (props)=>{
    
    const [product, setProduct] = useState([])

    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <ProductList product={product} setProduct={setProduct} />
        </div>
    )

}

export default Main