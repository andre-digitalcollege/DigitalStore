import Footer from "../../Footer.jsx";
import Logo from "../img/logo.png"


function Cadastre (){
    return(
        <div>
            <header className="headercadastre">
            <div>
            <img src={Logo} alt='shoe' style={{ width: '22.5px',height:'22.5px',top:'25.91px' }}></img>
            <span className='Digitalcadastre'>Digital Store</span>
            </div>
            </header>
            
            <div className="lineargradient" style={{width: '583px', height:'560px', paddingTop:'200px', paddingLeft:'100px',borderRadius:'4px',padding:'30px',gap:'30px',} }>
            </div>
            <Footer/>
        </div>
        
    )
}
export default Cadastre