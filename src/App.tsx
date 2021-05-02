import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserContainer from './features/screens/UserScreen';
import {Button} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div>
            <Button variant="contained" color="primary" href='/user'>
              Users
            </Button>
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
