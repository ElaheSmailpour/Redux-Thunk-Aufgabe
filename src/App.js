
import './App.css';
import {Provider} from 'react-redux';

import Zähler from "./components/Zähler";
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import ButtonMitInfo from "./components/ButtonMitInfo"
import Inputfeld from "./components/Inputfeld"
const store = createStore(reducer);

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
