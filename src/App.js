// import React, { useContext } from 'react'
import React from 'react'

// import DataProvider from './components/DataProvider';
import { DataContext } from './components/DataContext';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import RandBookSearch from './components/RandBookSearch';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Musings from './components/Musings';
import BooksIveRead from './components/BooksIveRead';
/* used npm install semantic-ui-react semantic-ui-css to get the menu
   buttons working, then noticed that it made my webpage look nicer
   this also makes the menu buttons for the subjects work */
import 'semantic-ui-css/semantic.min.css'
import WantToRead from './components/WantToRead';
import { useState } from 'react';



const App = () => {
  const [readBooks, setReadBooks] = useState([])
  const [willRead, setWillRead] = useState([])
  return (
    <div>
      <header>
        <a href="/">My Book App</a>
      </header>
      <div>
        <Nav />
      </div>
      <main className="App">
        {/* <DataContext.Provider value={{ readBooks, setReadBooks, willRead, setWillRead }}> */}
              {/* <BooksIveRead />
              <WantToRead /> */}
          {/* <Route path="/" exact component={Home}/>
          <Route path="/randombook" exact component={RandBookSearch}></Route>
          <Route path="/musings" exact component={Musings}></Route> */}
        {/* </DataContext.Provider> */}
        {/* <Route path="/booksiveread" exact component={BooksIveRead}></Route> */}
        <Route path="/" exact render={() => (
          <Home
            readBooks={readBooks}
            setReadBooks={setReadBooks}
            willRead={willRead}
            setWillRead={setWillRead}
          />
        )} 
        ></Route>
        <Route path="/randombook" exact component={RandBookSearch}></Route>
        <Route path="/musings" exact component={Musings}></Route>
        <Route path="/booksiveread" exact component={BooksIveRead}></Route>
        <Route path="/wanttoread" exact component={WantToRead}></Route>
      </main>
    </div>
  );
}


export default App;
