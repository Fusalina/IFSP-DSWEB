import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes'
import './App.css';
import BooksProvider from './context/BooksProvider';

function App() {

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
      <BrowserRouter>
        <Header />
        <BooksProvider>
          <Routes />
        </BooksProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
