import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Navbar from "./components/todoApp/Navbar"
import Home from "./components/todoApp/Home"
import Hilfe from "./components/todoApp/Hilfe"
import Nichgefunden from "./components/todoApp/Nichgefunden"
import TodoApp from "./components/todoApp/TodoApp"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Redirect exact path='/' to='/TodoApp' />
       
          <Route path="/TodoApp"><TodoApp /></Route>
          <Route path="/Hilfe"><Hilfe /></Route>
          <Route path="/Home"><Home /></Route>
          <Route path="*"><Nichgefunden /></Route>
         
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
