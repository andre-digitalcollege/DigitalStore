import Footer from "../../Footer.jsx";
import Logo from "../img/logo.png"
import tenis1 from "../img/tenis1.png"
import tenis2 from "../img/tenis2.png"
import google from "../img/google.png"
import facebook from "../img/facebook.png"
import { Link } from "react-router-dom";


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
                <img src={tenis1} alt='shoe' className="tenis1"></img>
                <img src={tenis2} alt='shoe' className="tenis2"></img>
                <div className="telinha">
                    <text className="acesseconta">Acesse sua conta</text>
                    <Link to={"/Cadastre2"} className="novocliente">Novo cliente? Então registre-se <a href="">aqui</a></Link>
                    <text className="loginesenha">Login*</text>
                    <input type='email' className="inputlogin" maxLength="50" placeholder="insira seu login ou email" ></input>
                    <text className="loginesenha2">Senha*</text>
                    <input type='password' className="inputsenha" maxLength="50" placeholder="insira sua senha" ></input>
                    <Link to={"/"} className="esquecisenha">Esqueci minha senha</Link>
                    

                    <div>
                   <Link to={"/"}><button className='acessarconta'>Acessar Conta</button></Link>
                    <text className="oufacalogin">Ou faça login com</text>
                    <img src={google} alt='shoe' className="google" ></img>
                    <img src={facebook} alt='shoe' className="facebook"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default Cadastre