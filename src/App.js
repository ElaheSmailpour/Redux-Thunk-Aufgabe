
import './App.css';
import store from "./store"
import {Provider} from 'react-redux';
import Zähler from "./components/Zähler";
import ButtonMitInfo from "./components/ButtonMitInfo"
import Inputfeld from "./components/Inputfeld"
import Zahl from "./components/Zahl"
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux-App</h1>
     <Zähler/>
     <ButtonMitInfo/>
     <Inputfeld/>
     <Zahl/>
    </div>
    </Provider>
  );
}

export default App;
