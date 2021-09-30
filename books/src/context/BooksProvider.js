import React, { useState, useEffect } from 'react';

export const BooksContext = React.createContext();

const BooksProvider = (props) => {

    const [books, setBooks] = useState({});

    useEffect(() => {
        console.log("[BooksProvider]");
        setBooks(
            [
                {
                    id: 0,
                    name: "A liberdade é uma luta constante",
                    author: "Angela Davis",
                    pages: "144"
                },
                {
                    id: 1,
                    name: "Multidão: guerra e democracia na era do império",
                    author: "Antonio Negri e Michael Hardt",
                    pages: "540"
                },
                {
                    id: 2,
                    name: "A descoberta do mundo",
                    author: "Clarice Lispector",
                    pages: "480"
                },
                {
                    id: 3,
                    name: "Gênero e desigualdades",
                    author: "Flávia Biroli",
                    pages: "210"
                }
            ]
        )
    }, [])

    return (
        <BooksContext.Provider value={{ books: books }}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;