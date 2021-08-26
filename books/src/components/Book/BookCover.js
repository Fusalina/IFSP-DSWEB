import React from 'react';


const BookCover = ( props ) => {
    return (
        <>
            <div className="m-1">
                
                <img src={props.urlSource} width="100"/>
            </div>
        </>
    )
}

export default BookCover;