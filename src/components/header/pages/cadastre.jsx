import Footer from "../../Footer.jsx";
import Logo from "../img/logo.png"


function Cadastre() {
    return (
        <div>
            <header className="headercadastre">
                <div className='Digitalcadastre' >
                    <img src={Logo} alt='shoe' className="imgcadastre" style={{ width: '22.5px', height: '22.5px', top: '25.91px' }}></img>
                    <span className="digitalcadastrenome">Digital Store</span>
                </div>
            </header>
            <div className="lineargradient">
                <div className="telinhaa">
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default Cadastre