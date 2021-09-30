import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Books from './components/Books/Books';
import NewBook from './components/NewBook/NewBook';
import Header from './components/Header/Header';
import FullBook from './components/FullBook/FullBook';

const routes = () => {
    return (

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
    )
}

export default routes;