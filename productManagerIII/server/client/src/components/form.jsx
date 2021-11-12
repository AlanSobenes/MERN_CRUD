import axios from 'axios'
import { useState } from 'react'
import { usHistory } from 'react-router-dom'

const Form = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    // const history = useHistory()

    const submit = (e) => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.post('http://localhost:8000/api/products', newProduct)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Jordan Product Manager</h1>
            <form onSubmit={submit}>
                <label>Title </label>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                <br />
                <label>Price</label>
                <input type="Number" onChange={e => setPrice(e.target.value)} value={price} />
                <br />
                <label>Description</label>
                <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
                <br />
                <button>Create</button>
            </form>
        </div>
    )
}

export default Form