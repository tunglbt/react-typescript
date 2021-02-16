import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import UserContainer from './features/containers/UserContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div>
            <Link to='/user'>User</Link>
          </div>
          <Switch>
            <Route path="/user" component={UserContainer}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
