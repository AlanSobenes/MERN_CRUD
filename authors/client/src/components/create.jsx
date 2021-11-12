import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Create = (props) => {
    const [name, setName] = useState('')
    const history = useHistory()
    const [errors, setErrors] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        const newAuthor = {
            name: name
        }
        axios.post('http://localhost:8000/api/authors', newAuthor)
            .then(res => {
                history.push('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }


    return (
        <div>
            <Link to='/'><h3>home</h3></Link>
            <h3>Add a new author:</h3>
            <form onSubmit={submit}>
                {
                    errors.map((err, index) =>
                        <p key={index} style={{ color: 'red' }}>{err}</p>)
                }
                <label>Name:</label>
                <br />
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
                <br />
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Create

