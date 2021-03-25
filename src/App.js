
import './App.css';
import store from "./store"
import {Provider} from 'react-redux';
import Zähler from "./components/Zähler";
import ButtonMitInfo from "./components/ButtonMitInfo"
import Inputfeld from "./components/Inputfeld"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux-App</h1>
     <Zähler/>
     <ButtonMitInfo/>
     <Inputfeld/>
    </div>
    </Provider>
  );
}

export default App;
