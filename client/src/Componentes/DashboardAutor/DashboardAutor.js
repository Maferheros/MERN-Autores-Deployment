import {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


function DashboardAutor (props){
    const [autores, setAutores] = useState ([]);
    const { removeFromDom } = props;

    useEffect (()=> {
        axios.get ( 'http://localhost:8080/')
            .then (response => {
                setAutores (response.data);
            });
    }, [autores]);

    const deleteAutor = (id) => {
        axios.delete ( `http://localhost:8080/delete/${id}`)
            .then (response => {
                removeFromDom(id)
            });
    }

    return (
        <div>
            <p> We have quotes by:</p>
            <Link to= "/new" > Add an author </Link>
            <table>
                <tr>
                    <th> Author </th>
                    <th> Actions available </th>
                </tr>
                <tr>
                <td>
                    {autores.map ((autor) => {
                        return (
                            <div>
                                <p>{autor.nombre}</p>
                            </div>
                        )
                    })}
                </td>
                <td>
                    {autores.map ((autor,index) => {
                        return (
                            <div>
                                <Link to= {"/" + autor._id + "/edit"} key={index} > <button> Edit </button> </Link>
                                <button onClick={() => deleteAutor(autor._id)}> Delete </button>
                            </div>
                        )
                    })}
                </td>
                </tr>
            </table>
        </div>
    )
}

export default DashboardAutor;