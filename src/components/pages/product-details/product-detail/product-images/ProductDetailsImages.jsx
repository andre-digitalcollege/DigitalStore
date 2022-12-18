import "./ProductDetailsImage.css";
import RightArrow from "../../../img/Vector 1.svg";
import LefttArrow from "../../../img/Vector 2.svg";

export default function ProductDetailsImages() {
  return (
    <div className="predefinicoesProductDetailsImage">
      <div className="featuredImage">
        <img className="arrow" src={LefttArrow} />
        <img className="arrow" src={RightArrow} />
      </div>
      <div className="carouselImages">
        <div
          className="carouselImage"
          style={{ backgroundColor: "#E2E3FF" }}
        ></div>
                <div
          className="carouselImage"
          style={{ backgroundColor: "#FFE8BC" }}
        ></div>
                <div
          className="carouselImage"
          style={{ backgroundColor: "#FFC0BC" }}
        ></div>
                <div
          className="carouselImage"
          style={{ backgroundColor: "#DEC699" }}
        ></div>
                <div
          className="carouselImage"
          style={{ backgroundColor: "#E8DFCF" }}
        ></div>
      </div>
    </div>
  );
}
