import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './components/Book/Book'
import BookCover from './components/Book/BookCover';

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
        id: 0,
        name: "A descoberta do mundo",
        author: "Clarice Lispector",
        pages: "480"
      },
      {
        id: 1,
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
    <div className="App">

      <form onSubmit={onBookSubmit}>
        <input type="text" id="name" placeholder="Digite o nome do livro" />
        <input type="text" id="author" placeholder="Digite o nome do autor(a)" />
        <input type="text" id="pages" placeholder="Digite o número de páginas" />
        <input type="submit" value="Cadastrar" />
      </form>
      
      {booksCover.map((booksCover) => {
        return (
          <BookCover id={booksCover.id} urlSource={booksCover.urlSource}>Cover</BookCover>
        )
      })}


      

      {/* <button onClick={onHandleSubmit}>Adiciona um livro</button> */}

    </div>
  );
}

export default App;
