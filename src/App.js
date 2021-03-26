
import './App.css';
import store from "./store"
import {Provider} from 'react-redux';
import Zähler from "./components/Zähler";
import ButtonMitInfo from "./components/ButtonMitInfo"
import Inputfeld from "./components/Inputfeld"
import Zahl from "./components/Zahl"
import InputAddresse from "./components/InputAddresse"
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux-App</h1>
     <Zähler/>
     <ButtonMitInfo/>
     <Inputfeld/>
     <Zahl/>
     <InputAddresse/>
    </div>
    </Provider>
  );
}

export default App;
