import React from "react";

export default function Header(){
   return (
   <div>
      <header style={{display:"flex" ,flexDirection:"column" ,padding:"10px 30px"}}>
         <div style={{padding:"34px 100px",flexDirection:"row" ,display:"flex" ,alignItems:"center" ,justifyContent:"space-around" ,border:"2px solid black"}}>
            <img style={{width:"33px" ,height:"33px" ,top:"38px" ,margin:"8px ",}} src="/img/logodigital.png" />
            <div style={{width:"212px" ,height:"44px" ,left:"41px" ,fontSize:"36.4px" ,letterSpacing:"-0.01em" ,color:"#C92071" }}>Digital Store</div>
            <input placeholder="Buscar" style={{width:"40%" ,heigth:"20px" ,padding:"20px" ,marginLeft:"27px" ,marginRight:"48px"}}></input>
            <button style={{width:"102px" ,lineHeight:"28px" ,fontSize:"16px" ,textDecorationLine:"underline" ,border:"none"}}>Cadastre-se</button>
            <button style={{margin:"0px 10px" ,padding:"0px" }}>Entrar</button>
            <img style={{width:"33px" ,height:"33px" ,top:"38px" ,margin:"8px " ,}} src="/img/carrinho.png" />
         </div>
         <div style={{display:"flex" ,alignItems:"center" ,marginRight:"30px"}}>
            <span style={{marginRight:"30px"}}>Home</span>
            <span style={{marginRight:"30px"}}>Produtos</span>
            <span style={{marginRight:"30px"}}>Categorias</span>
            <span style={{marginRight:"30px"}}>Meus Pedidos</span>
         </div>
      </header>
   </div>

// Width
// 559px
// Height
// 60px
// Top
// 34px
// Left
// 384px
// Radius
// 8px
// Opacity
// 4%n
   );
   }
