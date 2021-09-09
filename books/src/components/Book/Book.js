import React from 'react';
import BookCover from './BookCover';
import './Book.css';


const Book = ( props ) => {
    return(
        <>
            <div className="Book">
            <BookCover/>
            <p onClick={props.click}>{props.name} - {props.author} - {props.pages} - {props.children}</p>
            </div>
            
        </>
    )
}

export default Book;