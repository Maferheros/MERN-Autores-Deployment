import {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams}  from "react-router-dom";
import {Link} from 'react-router-dom';

function EditAutor (props) {
    const [nombre, setNombre] = useState ('');
    const {id} = useParams();
    console.log(id);
    const [errors, setErrors] = useState([]); 

    useEffect (() => {
        axios.get ( `http://localhost:8080/${id} `)
            .then (response => {
                console.log(response)
                setNombre ( () => response.data.nombre);
            })
            .catch (err => {
                console.log (err);
            });
      }, [id]);

const updateAutor = (event) => {
    event.preventDefault ();
    console.log(nombre);
    axios.put ( `http://localhost:8080/${id}/edit`, {nombre})
    .then( response => console.log(response))
    .catch(err=>{
        const errorResponse = err.response.data.errors; 
        const errorArr = []; 
        for (const key of Object.keys(errorResponse)) { 
            errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
    })            
}

    return (
        <div>
            <Link to= "/"> Home</Link>
            <p> Edit this author</p>
            <form onSubmit={updateAutor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <label> Name: </label>
                    <input type="text" name= "nombre" 
                    value= {nombre} 
                    onChange = { (event) => {setNombre (event.target.value)}}/>
                    <input type="submit"/>
                    <Link to= "/"> <button>Cancel</button> </Link>
            </form>
        </div>
    )
}

export default EditAutor;