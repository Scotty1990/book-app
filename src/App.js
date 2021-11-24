
import './App.css';
import BookSearch from './components/BookSearch';
import { Link, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      My Book App
      <Link to="/randomBook"><h3>Random Book Generator</h3></Link>
      <Route path="/randomBook" exact component={BookSearch}></Route>
    </main>
  );
}

export default App;
