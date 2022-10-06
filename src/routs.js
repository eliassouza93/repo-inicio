import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Rodape from "./Components/Rodape"
import Inicio from "./Pages/Inicio"
import UncontrolledExample from "./Pages/Inicio/Carrosel"
import Contato from "./Pages/SubPages/Contato"
import Projetos from "./Pages/SubPages/Projetos"
 
import Sobre from "./Pages/SubPages/Sobre"
 
export default function AppRoute () {
    return(
        <Router>
            <UncontrolledExample/>
          <NavBar/>
            <Routes>
                <Route path='/' element={<Inicio/>}  />
                <Route path='/contato' element={<Contato/>}  />
                <Route path='/projetos' element={<Projetos/>}  />
                <Route path='/sobre' element={<Sobre/>}  />
            </Routes>
            <Rodape/>
        </Router>
    )
}