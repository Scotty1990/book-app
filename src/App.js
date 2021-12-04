
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
        <Route path="/booksiveread" exact component={BooksIveRead}></Route>

      </main>
    </div>
  );
}

export default App;
