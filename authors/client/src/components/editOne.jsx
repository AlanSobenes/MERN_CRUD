import { Link, useHistory, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const Update = (props) => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.author.name)
            })
    }, [id])


    const submit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
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
            <h3>Edit this author:</h3>
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
export default Update