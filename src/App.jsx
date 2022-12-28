import Banner from "./components/Banner/Banner.jsx"
import Header from "./components/header/Header";
import Categorias from "./components/Categorias.jsx"
import Lista from "./components/Lista.jsx"
import Destaques from "./components/Destaques.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Categorias />
      <Lista />
      <Destaques />
      <Footer />
     
    </div>
  );
}

export default App;

