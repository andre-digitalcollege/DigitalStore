import React from "react";

export default function Header(){
   return (
   <div>
      <header style={{display:"flex" ,flexDirection:"column"  }}>
         <div style={{padding:"34px 102px",flexDirection:"row" ,display:"flex" ,alignItems:"center" ,justifyContent:"space-between" }}>
            
            <div style={{width:"280px" ,height:"44px",fontSize:"36.4px" ,letterSpacing:"-0.01em" ,color:"#C92071" ,fontWeight:"600"}}><img style={{width:"33px" ,height:"33px" ,top:"38px" ,marginRight:"8px "}} src="/img/logodigital.png" />Digital Store</div>
            <input placeholder="Pesquisar produto..." style={{borderRadius:"8px" ,opacity:"60%" ,width:"559px" ,heigth:"60px" ,top:"34",padding:"20px" ,fontWeight:"400" ,margin:"27px" ,left:"384px"}}></input>
            <button style={{width:"102px" ,top:"50px" ,left:"991px" ,height:"28px" ,fontSize:"16px" ,textDecorationLine:"underline" ,border:"none"}}>Cadastre-se</button>
            <button style={{width:"114px" ,height:"40px" ,borderRadius:"8px" ,background:"#C92071" ,color:"white" ,fontWeight:"700" ,fontSize:"14px" ,marginLeft:"30px" }}>Entrar</button>
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
