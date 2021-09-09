import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';

const Books = ({ books, deleteBookHandler }) => {
    return (
        <div>
            {books.map((book, index) => {
                return (
                    <Link to={"/livros/" + book.id} key={index}>
                        <Book
                            url={book.url}
                            name={book.name}
                            author={book.author}
                            pages={book.pages}
                            click={() => deleteBookHandler(index)}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default Books;