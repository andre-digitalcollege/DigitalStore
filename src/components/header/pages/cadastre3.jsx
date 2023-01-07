import Footer from "../../Footer.jsx";
import Logo from "../img/logo.png"
import google from "../img/google.png"
import facebook from "../img/facebook.png"
import linha from "../img/linha.png"
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
                    <text className="informacoes">Informações pessoais</text>
                    <img src={linha} alt='shoe'></img>
                    <text className="loginesenha">Nome completo *</text>
                    <input type='email' className="inputlogin" maxLength="50" placeholder="insira seu nome" ></input>
                    <text className="cpf">CPF *</text>
                    <input type='email' className="inputlogin" maxLength="50" placeholder="insira seu CPF" ></input>
                    <text className="email">E-mail *</text>
                    <input type='email' className="inputlogin" maxLength="50" placeholder="insira seu email" ></input>
                    <text className="celular">Celular *</text>
                    <input type='email' className="inputlogin" maxLength="50" placeholder="insira seu celular" ></input>
                    

                    {/* <div>
                   <Link  to={"/"}><button className='acessarconta2'>Criar Contaasdasdasd</button></Link>
                    <text className="oufacalogin2">Ou faça login com</text>
                    <img src={google} alt='shoe' className="google2" ></img>
                    <img src={facebook} alt='shoe' className="facebook2"></img>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default Cadastre3