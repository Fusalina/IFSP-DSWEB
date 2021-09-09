import React from 'react';

const NewBook = ({onBookSubmit}) => {
    
    return (
        <div>
            <form onSubmit={onBookSubmit}>
                <input type="text" id="name" placeholder="Digite o nome do livro" />
                <input type="text" id="author" placeholder="Digite o nome do autor(a)" />
                <input type="text" id="pages" placeholder="Digite o número de páginas" />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
};

export default NewBook;