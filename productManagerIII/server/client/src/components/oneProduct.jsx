import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"

const OneProduct = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res => setProduct(res.data.product))
        .catch(err => console.log(err))
        }, [])
    
    console.log(product)
    
    
    return(
        <div>
            <h1>👟 {product.title} 👟</h1>
            <h2>💲{product.price}</h2>
            <h2>ℹ️: {product.description}</h2>
        </div>
    )
}
export default OneProduct

