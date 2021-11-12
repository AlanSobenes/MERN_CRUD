import React, {useEffect, useState} from 'react'
import { useParams, link } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import OneProduct from './oneProduct'

const Display = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setData(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(data)
    return(
        <div style={{marginLeft: "35%",marginRight:"30%"}}>
            <h1>Current 👟 Products:</h1>
            {
                data.map((product, idx) =>(
                    <div key={idx}>
                        <Link to={`/products/${product._id}`}><h2 >{product.title}</h2></Link> 
                    </div>
                ))
            }
        </div>
    )
}
export default Display