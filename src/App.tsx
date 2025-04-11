
import { BrowserRouter, Route, Routes } from "react-router"
import Evento from "./Evento"
import DadoEvento from "./DadoEvento"
import Inscricao from "./Inscricao"
import IncricaoAtheta from "./IncricaoAtheta"
import Pagamento from "./Pagamento"
import Inicio from "./Inicio"
function App() {
  

  return (
    
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Inicio />} />
          <Route path='/Eventos' element={<Evento />} />
          <Route path='/mais_sob_evento' element={<DadoEvento />} />
          <Route path='/inscriçao' element={<Inscricao />} />
          <Route path='/IncricaoAtheta' element={<IncricaoAtheta />} />
          <Route path='/Pagamento' element={<Pagamento />} />
        </Routes>
    </BrowserRouter>
      
   
  )
}

export default App
