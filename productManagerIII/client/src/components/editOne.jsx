import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Update = (props) => {
    
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    let history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res =>{
                console.log(res.data.product)
                history.push('/')
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={updateProduct}>
                <label>Title </label>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                <br />
                <label>Price</label>
                <input type="Number" onChange={e => setPrice(e.target.value)} value={price} />
                <br />
                <label>Description</label>
                <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
                <br />
                <button>Update</button>
            </form>
        </div>
    )
}
export default Update
