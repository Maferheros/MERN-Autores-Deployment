import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

function NewAutor (props) {
    const [ nombre , setNombre ] = useState('');
    const history = useHistory()
    const [errors, setErrors] = useState([]); 
    
    const agregarAutor = (event) => {
        event.preventDefault();
        axios.post( 'http://localhost:8080/new',
        {nombre})
            .then( response => {history.push( "/")})
            .catch ( err => {
                const errorResponse = err.response.data.errors;
                console.log(err.response);
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(setErrors)
            })
        }

return (
    <div>
        <Link to= "/"> Home </Link>
        <form onSubmit={agregarAutor}>
            { errors.map ((err,index) => <p key={index}>{err}</p>)}
            <p> Add a new author: </p>
            <label htmlFor='nombre'> Name: </label>
            <input type="text" id="nombre" onChange={(event) => setNombre (event.target.value)}></input>
            <nav>
            <input type="submit"/>
            <Link to= "/"> <button>Cancel</button> </Link>
            </nav>
        </form>
    </div>
    )
}

export default NewAutor;
