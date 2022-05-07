import './App.css';
import { Main } from './Compo/Main';
import {Routes,Route} from "react-router-dom"
import { Women } from './Compo/Pages/Women';
import { Mendata } from './Compo/Pages/Mendata';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/women" element={<Women/>} />
      <Route path="/men" element={<Mendata/>} />
    </Routes>
  );
}

export default App;
