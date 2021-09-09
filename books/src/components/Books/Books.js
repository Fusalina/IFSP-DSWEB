import React from 'react';
import Book from '../Book/Book'

const Books = ( {books, deleteBookHandler}) => {
    return (
        <div>
            {books.map((book, index) => {
                return (
                    <Book 
                        key={index} 
                        url={book.url}
                        name={book.name} 
                        author={book.author}
                        pages={book.pages} 
                        click={() => deleteBookHandler(index)}
                    />
                );
            })}
        </div>
    );
}

export default Books;