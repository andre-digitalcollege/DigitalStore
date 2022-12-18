import "./ProductDetails.css"
import HeroSection from "./hero-section/HeroSection.jsx"
import ProductDetail from "./product-detail/ProductDetail.jsx";
import RelatedProducts from "./related-products/RelatedProducts.jsx";

export default function ProductDetails() {
  return (
    <div className="predefinicoesProductDetails">
        <HeroSection />
        <ProductDetail />
        <RelatedProducts />
    </div>
  );
}
