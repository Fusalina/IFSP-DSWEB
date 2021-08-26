import React from 'react';

const Book = ( props ) => {
    return(
        <>
            <p>{props.name} - {props.author} - {props.pages} - {props.children}</p>
        </>
    )
}

export default Book;