import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = (props) => {
    const [authors, setAuthors] = useState([])
    const destroyFromDB = id => {
        setAuthors(authors.filter(author => author._id !== id));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data.authors)
                setAuthors(res.data.authors)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res => {
                destroyFromDB(id)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to='/authors/create'>
                <h3>Add an Author</h3>
            </Link>
            <h3>We have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, idx) => (
                            <tr key={idx}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/authors/edit/${author._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={(e) => { deleteAuthor(author._id) }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Display








