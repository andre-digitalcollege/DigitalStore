import "./ProductDescription.css";
import StarIcon from "../../../img/Path.svg";
import StarIconSelected from "../../../img/PathSelected.svg";
import StarIconRating from "../../../img/Star 1.svg";

export default function ProductDetailsDescription() {
  return (
    <div className="predefinicoesProductDescription">
      <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
      <div className="productTags">
        <div>Casual</div>
        <span>|</span>
        <div>Nike</div>
        <span>|</span>
        <div>REF:38416711</div>
      </div>
      <div style={{ alingItens: "center" }}>
        <div className="starIcons">
          <img
            src={StarIconSelected}
            style={{ width: "14.54px", height: "14px" }}
          />
          <img
            src={StarIconSelected}
            style={{ width: "14.54px", height: "14px" }}
          />
          <img
            src={StarIconSelected}
            style={{ width: "14.54px", height: "14px" }}
          />
          <img
            src={StarIconSelected}
            style={{ width: "14.54px", height: "14px" }}
          />
          <img src={StarIcon} style={{ width: "14.54px", height: "14px" }} />
        </div>
        <div className="boxStarRating">
          <span>4.7</span>
          <img
            src={StarIconRating}
            style={{ width: "11.82px", height: "10px" }}
          />
        </div>
        <div>
          <span className="productAvaliationNumber">(90 avaliações)</span>
        </div>
      </div>
      <div style={{textAlign: "end", marginTop: "20px", boxSizing: "border-box"}}>
        <span
          style={{
            fontWeight: "400",
            fontSize: "16px",
            letterSpacing: "0.75px",
            color: "#474747",
          }}
        >
          R$
        </span>
        <span
          style={{
            fontWeight: "700",
            fontSize: "32px",
            letterSpacing: "1px",
            color: "#474747",
          }}
        >
          219
          <span
            style={{
              fontWeight: "700",
              fontSize: "16px",
              letterSpacing: "1px",
              color: "#474747",
            }}
          >
            ,00
          </span>
        </span>
        <span
          style={{
            fontWeight: "400",
            fontSize: "16px",
            letterSpacing: "0.75px",
            color: "#CCCCCC",
            textDecorationLine: "line-through"
          }}
        >
          219,00
        </span>
      </div>
      <div className="productDescription">
        <div>
          <span className="titleDescription">Descrição do produto</span>
        </div>
        <div className="productTextDescription">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </span>
        </div>
      </div>
      <div className="productSizes">
        <span className="titleDescription">Tamanho</span>
        <div>
          <div className="boxProductSizes">39</div>
          <div className="boxProductSizes">40</div>
          <div className="boxProductSizes">41</div>
          <div className="boxProductSizes">42</div>
          <div className="boxProductSizes">43</div>
        </div>
      </div>
      <div className="productColors">
        <span className="titleDescription">Tamanho</span>
        <div>
          <div
            className="boxProductColors"
            style={{ backgroundColor: "#6FEEFF" }}
          ></div>
          <div
            className="boxProductColors"
            style={{ backgroundColor: "#FF6969" }}
          ></div>
          <div
            className="boxProductColors"
            style={{ backgroundColor: "#5E5E5E" }}
          ></div>
          <div
            className="boxProductColors"
            style={{ backgroundColor: "#6D70B7" }}
          ></div>
        </div>
      </div>
      <div>
        <button className="btnComprar">COMPRAR</button>
      </div>
    </div>
  );
}
