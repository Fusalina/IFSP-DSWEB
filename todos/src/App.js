import react, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('Fetch data');
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Erro", err);
      })
  }, []);

  const updateTodo = (event) => {
    event.preventDefault();
    let data = {
      id: event.target.id.value,
      title: event.target.title.value,
    }

    axios.put('https://jsonplaceholder.typicode.com/todos/', data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const deleteTodoHandler = (index) => {
    index.preventDefault();
    axios.delete('https://jsonplaceholder.typicode.com/todos/'+index)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("Erro", err);
    })
    let newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const onTodoSubmit = (event) => {
    event.preventDefault();
    let newTask = {
      id: todos.length + 1,
      title: event.target.title.value,
    }
    axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Erro", err);
      })
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={onTodoSubmit}>
          <input type="text" id="title" placeholder="Digite o título da tarefa"></input>
          <input type="submit" className="BtnSubmit" value="Cadastrar"></input>
        </form>
      </div>

      <div>
        <form onSubmit={updateTodo}>
          <input type="text" id="id" placeholder="Digite o id da tarefa a ser alterada"></input>
          <input type="text" id="title" placeholder="Digite o novo titulo"></input>
          <input type="submit" className="BtnChange" value="Alterar"></input>
        </form>
      </div>

      <div>
        <form onSubmit={deleteTodoHandler}>
          <input type="text" id="id" placeholder="Digite o id da tarefa a ser removida"></input>
          <input type="submit" className="BtnDelete" value="Deletar"></input>
        </form>
      </div>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>

        )
      })}
    </div>
  );
}

export default App;
