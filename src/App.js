import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';

const App = () =>(
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={LoginComponent} />
    <Route path="/signup" exact component={SignupComponent} />
  </div>
);
export default App;