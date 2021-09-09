import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../Book/Book';

const FullBook = () => {

    const {id} = useParams();
    const params = useParams();
    //console.log(params.name);
    
    useEffect( () => {
        //busca no banco de dados por ID
    }, [])

    return(
        <div>
            <p>Livro específico { id }</p>
            <h1>{this.state.name}</h1>
        </div>
    )
}

export default FullBook;