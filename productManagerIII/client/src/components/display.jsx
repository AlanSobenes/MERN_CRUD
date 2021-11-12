import React, {useEffect, useState} from 'react'
import { useParams, link } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Display = (props) => {
    const [data, setData] = useState([])
    
    const destroyFromDB = Id => {
        setData(data.filter(product => product._id != Id));
    }
    
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setData(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])
    
    

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
        .then(res => {
            destroyFromDB(id)
        })
        .catch(err => console.log(err))

    }

    return(
        <div style={{marginLeft: "35%",marginRight:"30%"}}>
            <h1>Current 👟 Products:</h1>
            {
                data.map((product, idx) =>(
                    <div key={idx}>
                        <Link to={`/products/${product._id}`}>
                            <h2 >{product.title}</h2>
                        <Link to={`/products/edit/${product._id}`}>
                            <h2>Edit</h2>
                        </Link>
                            
                        </Link> 
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Display