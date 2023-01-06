import Footer from "../../Footer.jsx";
import Logo from "../img/logo.png"
import google from "../img/google.png"
import facebook from "../img/facebook.png"
import { Link } from "react-router-dom";


function Cadastre3() {
    return (
        <div className="app-header">
            <header className="headercadastre">
                <div className='Digitalcadastre' >
                    <img src={Logo} alt='shoe' className="imgcadastre" style={{ width: '22.5px', height: '22.5px', top: '25.91px' }}></img>
                    <span className="digitalcadastrenome">Digital Store</span>
                </div>
            </header>
            <div className="telacadastre3">
            <text>Crie sua conta</text>
                <div className="telinha3">
                    <text className="criarconta">Crie sua conta</text>
                    <Link to={"/Cadastre"} className="novocliente">Já possui uma conta? Entre <a href="">aqui.</a></Link>
                    <text className="loginesenha">Email*</text>
                    <input type='email' className="inputlogin" maxLength="50" placeholder="insira seu login ou email" ></input>
                    

                    <div>
                   <Link  to={"/"}><button className='acessarconta2'>Criar Contaasdasdasd</button></Link>
                    <text className="oufacalogin2">Ou faça login com</text>
                    <img src={google} alt='shoe' className="google2" ></img>
                    <img src={facebook} alt='shoe' className="facebook2"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default Cadastre3