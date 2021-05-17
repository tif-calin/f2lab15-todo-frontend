import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import Auth from '../auth/Auth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import TodoList from '../todos/TodosList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/auth"
                render={routerProps => (
                  <Auth {...routerProps} />
                )}
              />

              <Route path="/todos" exact={true}
                render={routerProps => (
                  <TodoList {...routerProps} />
                )}
              />

              <Route path="/todos/:id"
                render={routerProps => (
                  <div>{routerProps.match.params.id}</div>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
