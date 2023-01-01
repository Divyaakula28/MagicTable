import logo from './logo.svg';
import './App.css';
import React from "react";
import Apps from './Components/Apps';
import Secondpage from "./Components/secondpage";
import Content from "./Components/Content"
import Confetti from "./Components/confetti";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter, Route, Routes,HashRouter} from "react-router-dom";

function App() {
  return (
      <Routes basename="MagicTable">
        <Route path='/submagic' element={<Apps/>}/>
        <Route path="/magic_table" element={<Secondpage/>} />
        <Route exact path='/' element={<Content/>}/>
        <Route exact path='/confetteei' element={<Confetti/>}/>
      </Routes>

  );
}

export default App;
