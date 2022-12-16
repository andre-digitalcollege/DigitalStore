import Header from "./components/header/Header";
import Hero from "./components/pages/product-details/hero-section/Hero_Section.jsx"

import Footer from "./components/Footer.jsx"
import Product_Detail from "./components/pages/product-details/product-details/Product_Details";
import Related_Products from "./components/pages/product-details/related-products/Related_Products";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Product_Detail />
      <Related_Products />
      <Footer />     
    </div>
  );
}

export default App;
