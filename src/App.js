import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Navbar} from "./components/Navbar"
import {Pets} from './pages/Pets'
import {Contact} from "./pages/Contact"
import {PostNewPets} from "./pages/PostNewPets"


function App() {
  return <BrowserRouter>
        {/*  Colocando um componente entre o BrowserRouter e o Routes, ele será renderizado em todas as rotas */}
    <Navbar />
    <Routes>
      <Route path="/pets/:species" element={<Pets/>}/>
      <Route path="/faleconosco" element={<Contact/>} /> 
      <Route path="/cadastro-pets" element={<PostNewPets />} />
    </Routes>
  </BrowserRouter>
}

export default App;
