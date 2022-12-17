import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Produtos from './pages/Produtos.jsx'
import Meusprodutos from './pages/Meusprodutos.jsx'
import Categorias from './pages/Categorias.jsx'
import Hm from '/DigitalStore/src/components/header/pages/Hm.jsx'
import Header from '../Header.jsx'
function Hm() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/meusprodutos" element={<Meusprodutos />} />
      </Route>  
    </Routes>
  </BrowserRouter>  
  );
}
export default Hm