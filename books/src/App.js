import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Books from './components/Books/Books';
import NewBook from './components/NewBook/NewBook';
import Header from './components/Header/Header';
import FullBook from './components/FullBook/FullBook';
import './App.css';

function App() {

  const [booksCover, setBooksCover] = useState(
    [
      {
        id: 0,
        urlSource: "https://site.claricelispector.ims.com.br/wp-content/uploads/2020/05/Capa_A_descoberta_do_mundo.jpg"
      },
      {
        id: 1,
        urlSource: "https://m.media-amazon.com/images/I/61V6WTHOshL.jpg"
      }
    ]
  )

  const [books, setBooks] = useState(
    [
      {
        id: 1,
        url: "https://site.claricelispector.ims.com.br/wp-content/uploads/2020/05/Capa_A_descoberta_do_mundo.jpg",
        name: "A descoberta do mundo",
        author: "Clarice Lispector",
        pages: "480"
      },
      {
        id: 2,
        url: "https://m.media-amazon.com/images/I/61V6WTHOshL.jpg",
        name: "Gênero e desigualdades",
        author: "Flávia Biroli",
        pages: "210"
      },
    ]
  );

  /* // FUNÇAO DE INCREMENTAR UM LIVRO COM BOTAO
  const onHandleSubmit = () => {
    let newBooks = [...books, //tres pontos copiam os objetos dentro do vetor[books] e adicionam o objeto abaixo
    {
      id: books.length + 1,
      name: "Dom Casmurro",
      author: "Machado de Assis",
      pages: 232
    }
    ];
    let newCover = [...booksCover,
    {
      id: booksCover.length + 1,
      urlSource: "https://http2.mlstatic.com/D_NQ_NP_855423-MLB41572489335_042020-O.jpg"
    }
    ];
    setBooks(newBooks);
    setBooksCover(newCover);
  }
  */

  const onBookSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    let newBooks = [...books,
    {
      id: books.length + 1,
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value
    }
    ];
    setBooks(newBooks)
  }

  /*
  const onToogleBooks = () => {
    setShowBooks(!showBooks);
    if (style.backgroundColor === 'green') {
      newStyle.backgroundColor = 'red';
    } else {
      newStyle.backgroundColor = 'green';
    }
    setStyle(newStyle);
  }
  */

  const deleteBookHandler = (index) => {
    let newBooks = books.slice();
    newBooks.splice(index, 1);
    setBooks(newBooks);
    console.log(books);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Livros</h1>
        <Switch>
          <Redirect from="/" to="/livros" exact />

          <Route path="/livros" exact>
            <Books books={books} deleteBookHandler={deleteBookHandler} />
          </Route>

          <Route path="/livros/novolivro" exact>
            <NewBook onBookSubmit={onBookSubmit} />
          </Route>

          <Route path="/livros/:id" exact>
            <FullBook />
          </Route>

          <Route render={() => <div> Página não encontrada </div>} />

        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
