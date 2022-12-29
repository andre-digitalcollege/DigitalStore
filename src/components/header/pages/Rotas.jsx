import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Produtos from './Produtos.jsx';
import Meusprodutos from './Meusprodutos.jsx';
import Categorias from './Categorias.jsx';
import Home from './Home.jsx';
import Cadastre from './cadastre.jsx'
function Rotas() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/meusprodutos" element={<Meusprodutos />} />
        <Route path="/Cadastre" element={<Cadastre />} />
    </Routes>
  </BrowserRouter>  
  );
}
export default Rotas;