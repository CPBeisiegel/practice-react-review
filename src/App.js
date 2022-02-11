import { BrowserRouter, Routes, Route } from "react-router-dom";
// importando as paginas e componentes e linkando a uma rota 
import {Navbar} from "./components/Navbar"
import {Pets} from './pages/Pets'
import {Contact} from "./pages/Contact"
import {PostNewPets} from "./pages/PostNewPets"
import {EditPet} from "./pages/EditPet"

function App() {
  return <BrowserRouter>
        {/*  Colocando um componente entre o BrowserRouter e o Routes, ele será renderizado em todas as rotas */}
    <Navbar />
    {/* Criamos as rotas para as paginas onde vamos renderizar as informações ou como no caso da cadastro-pets, vamos inserir um novo pet na api */}
    <Routes>
    {/* usamos o species por conta da api, mas ele será substituido pelo params que inserimos na page pets */}
    {/* Chamamos de deifnição de paramentro de rota */}
      <Route path="/pets/:species" element={<Pets/>}/>
      <Route path="/faleconosco" element={<Contact/>} /> 
      <Route path="/cadastro-pets" element={<PostNewPets />} />
      <Route path="/editar-pet/:id" element={<EditPet />} />
      </Routes>
  </BrowserRouter>
}

export default App;
