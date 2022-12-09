import React from "react";

export default function Header(){
   return (
   <div>
      <header style={{display:"flex" ,flexDirection:"column"  }}>
         <div style={{padding:"34px 102px",flexDirection:"row" ,display:"flex" ,alignItems:"center" ,justifyContent:"space-between" }}>
            <img style={{width:"33px" ,height:"33px" ,top:"38px" ,marginRight:"8px "}} src="/img/logodigital.png" />
            <div style={{width:"212px" ,height:"44px" ,left:"41px" ,fontSize:"36.4px" ,letterSpacing:"-0.01em" ,color:"#C92071" ,fontWeight:"600"}}>Digital Store</div>
            <input placeholder="Pesquisar produto..." style={{width:"40%" ,heigth:"20px" ,padding:"20px" ,marginLeft:"27px" ,marginRight:"48px" ,fontWeight:"400" ,}}></input>
            <button style={{width:"102px" ,lineHeight:"28px" ,fontSize:"16px" ,textDecorationLine:"underline" ,border:"none"}}>Cadastre-se</button>
            <button style={{width:"114px" ,height:"40px" ,borderRadius:"8px" ,background:"#C92071" ,color:"white"}}>Entrar</button>
            <img style={{width:"33px" ,height:"33px" ,top:"38px" ,margin:"8px " ,}} src="/img/carrinho.png" />
         </div>
         <div style={{display:"flex" ,alignItems:"center" ,marginRight:"30px"}}>
            <span style={{marginLeft:"102px" ,marginRight:"30px"}}>Home</span>
            <span style={{marginRight:"30px"}}>Produtos</span>
            <span style={{marginRight:"30px"}}>Categorias</span>
            <span style={{marginRight:"30px"}}>Meus Pedidos</span>
         </div>
      </header>
   </div>


   );
   }
