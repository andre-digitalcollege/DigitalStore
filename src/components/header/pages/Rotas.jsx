import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Produtos from './Produtos.jsx';
import Meusprodutos from './Meusprodutos.jsx';
import Categorias from './Categorias.jsx';
import Home from './Home.jsx';
import Cadastre from './cadastre.jsx'
import Cadastre2 from './cadastre2.jsx';
import Cadastre3 from './cadastre3.jsx'
function Rotas() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/meusprodutos" element={<Meusprodutos />} />
        <Route path="/Cadastre" element={<Cadastre />} />
        <Route path="/Cadastre2" element={<Cadastre2/>}></Route>
        <Route path="/Cadastre3" element={<Cadastre3/>}></Route>
    </Routes>
  </BrowserRouter>  
  );
}
export default Rotas;