import "./ProductDetail.css"
import ProductDetailsImages from "./product-images/ProductDetailsImages.jsx"
import ProductDetailsDescription from "./product-description/ProductDescription"

export default function Product_Detail(){
    return(
        <div className="predefinicoesProductDetail">
            <ProductDetailsImages />
            <ProductDetailsDescription />
        </div>
    )
} 