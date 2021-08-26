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

  return (
    <div className="App">
      
      {booksCover.map((booksCover) => {
        return (
          <BookCover id={booksCover.id} urlSource={booksCover.urlSource}>Cover</BookCover>
        )
      })}
      
      
      {books.map((book) => {
        return (
          <Book name={book.name} author={book.author}
            pages={book.pages}>Esse livro é muito bom</Book>
        )
      })}
      <button onClick={onHandleSubmit}>Adiciona um livro</button>
    </div>
  );
}

export default App;
