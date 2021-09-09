import React from 'react';
import BookCover from './BookCover';
import './Book.css';


const Book = ( props ) => {
    return (
        <>
            <div className="Book">
                <p>{props.name}</p>
                <p>{props.author} </p>
                <p>{props.pages}</p>
                <p>{props.children}</p>
                <button onClick={props.click}>Apagar livro</button>
            </div>

        </>
    )
}

export default Book;