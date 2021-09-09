import React from 'react';

const Books = () => {
    return (
        <div>
            {books.map((book, index) => {
                return (
                    <Book 
                        key={index} 
                        name={book.name} 
                        author={book.author}
                        pages={book.pages} 
                        click={() => deleteBookHandler(index)}
                    >Esse livro é muito bom</Book>
                );
            })}
        </div>
    );
}

export default Books;