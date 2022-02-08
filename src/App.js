import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Navbar} from "./components/Navbar"
import {Pets} from './pages/Pets'


function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/pets/:species" element={<Pets/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
