import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <header className="Header">
            <nav>
                <li><NavLink to="/livros" exact>Home</NavLink></li>
                <li><NavLink to="/livros/novolivro" exact>Novo Livro</NavLink></li>
            </nav>
        </header>
    );
};

export default Header;