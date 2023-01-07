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
            <text className="criarconta2">Criar Conta</text>
                <div className="telinha3">
                    <text className="informacoes">Informações pessoais</text>
                    <img src={linha} alt='shoe'></img>
                    <text className="seunome">Nome completo *</text>
                    <input type='email' className="inputlogin1" maxLength="50" placeholder="insira seu nome" ></input>
                    <text className="cpf">CPF *</text>
                    <input type='email' className="inputlogin2" maxLength="50" placeholder="insira seu CPF" ></input>
                    <text className="email">E-mail *</text>
                    <input type='email' className="inputlogin3" maxLength="50" placeholder="insira seu email" ></input>
                    <text className="celular">Celular *</text>
                    <input type='email' className="inputlogin4" maxLength="50" placeholder="insira seu celular" ></input>

                    <div className="telinha4">
                    <text className="informacoes">Informações de entrega</text>
                    <img src={linha} alt='shoe'></img>
                    <text className="seunome">Endereço *</text>
                    <input type='email' className="inputlogin1" maxLength="50" placeholder="insira seu endereço" ></input>
                    <text className="cpf">Bairro *</text>
                    <input type='email' className="inputlogin2" maxLength="50" placeholder="insira seu bairro" ></input>
                    <text className="email">Cidade *</text>
                    <input type='email' className="inputlogin3" maxLength="50" placeholder="insira sua cidade" ></input>
                    <text className="celular">CEP *</text>
                    <input type='email' className="inputlogin4" maxLength="50" placeholder="insira seu CEP" ></input>
                    <text className="complemento">Complemento *</text>
                    <input type='email' className="inputlogin5" maxLength="50" placeholder="insira completo" ></input>
                    <input type='checkbox' className="checkbox"></input>
                    <text className="textocheckbox">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</text>
                    </div>
                    

                    <div>
                   <Link  to={"/"}><button className='criarconta3'>Criar Conta</button></Link>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}
export default Cadastre3