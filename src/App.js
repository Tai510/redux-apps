import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar';
import Todo from './components/Todo/Todo';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  

  return (
    <div className="App">
    <Router>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/todo' component={Todo} />
    </Router>
    </div>
  );
}

export default App;
