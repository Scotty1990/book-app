
import './App.css';
import RandBookSearch from './components/RandBookSearch';
import { Link, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Home from './components/Home';
import Musings from './components/Musings';
import 'semantic-ui-css/semantic.min.css'

function App() {
 
  return (
    <div>
      <header>
        <a href="/">My Book App</a>
      </header>
      <div>
        <Nav />
      </div>
      <main className="App">
        {/* My Book App */}
        
        <Route path="/" exact component={Home}/>
        <Route path="/randombook" exact component={RandBookSearch}></Route>
        <Route path="/musings" exact component={Musings}></Route>
        
      </main>
    </div>
  );
}

export default App;
