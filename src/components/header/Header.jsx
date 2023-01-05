import Logo from './img/logo.png';
import {Outlet, Link} from 'react-router-dom';
import './header.css';

function Header() {
  return (
      <div className='centralizar'>
        <header className='app-header'>
          <div className='home'>
            <img src={Logo} alt='shoe' style={{ width: '2.29vw', borderRadius: '8px' }}></img>
            <span className='Digital'>Digital Store</span>
            <div>
              <input type='text' className='place' placeholder="Pesquisar Produtos..." ></input>
            </div>
        
            <Link to={"/Cadastre"}><span className='cadastre-se'>Cadastre-se</span></Link>
            <Link to={"/Entrar"}><button className='entrar'>Entrar</button></Link>
            <svg className='svg' width="33" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42233 24.8203C7.84433 24.8203 8.18733 25.1633 8.18733 25.5853C8.18733 26.0073 7.84433 26.3493 7.42233 26.3493C7.00033 26.3493 6.65833 26.0073 6.65833 25.5853C6.65833 25.1633 7.00033 24.8203 7.42233 24.8203Z" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6747 24.8203C19.0967 24.8203 19.4397 25.1633 19.4397 25.5853C19.4397 26.0073 19.0967 26.3493 18.6747 26.3493C18.2527 26.3493 17.9097 26.0073 17.9097 25.5853C17.9097 25.1633 18.2527 24.8203 18.6747 24.8203Z" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.74988 8.25L4.82988 8.61L5.79288 20.083C5.87088 21.018 6.65188 21.736 7.58988 21.736H18.5019C19.3979 21.736 20.1579 21.078 20.2869 20.19L21.2359 13.632C21.3529 12.823 20.7259 12.099 19.9089 12.099H5.16388" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1254 15.795H16.8984" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.7074 13V11.6705L24.8139 8.79403C25.0781 8.53835 25.2997 8.30824 25.4787 8.10369C25.6605 7.89915 25.7983 7.69886 25.892 7.50284C25.9858 7.30398 26.0327 7.08949 26.0327 6.85938C26.0327 6.60369 25.9744 6.38352 25.858 6.19886C25.7415 6.01136 25.5824 5.8679 25.3807 5.76847C25.179 5.66619 24.9503 5.61506 24.6946 5.61506C24.4276 5.61506 24.1946 5.66903 23.9957 5.77699C23.7969 5.88494 23.6435 6.03977 23.5355 6.24148C23.4276 6.44318 23.3736 6.68324 23.3736 6.96165H21.6222C21.6222 6.39062 21.7514 5.89489 22.0099 5.47443C22.2685 5.05398 22.6307 4.72869 23.0966 4.49858C23.5625 4.26847 24.0994 4.15341 24.7074 4.15341C25.3324 4.15341 25.8764 4.2642 26.3395 4.4858C26.8054 4.70455 27.1676 5.00852 27.4261 5.39773C27.6847 5.78693 27.8139 6.23295 27.8139 6.7358C27.8139 7.06534 27.7486 7.39062 27.6179 7.71165C27.4901 8.03267 27.2614 8.3892 26.9318 8.78125C26.6023 9.17045 26.1378 9.63778 25.5384 10.1832L24.2642 11.4318V11.4915H27.929V13H21.7074Z" fill="white" />
            </svg>
          </div>
        
            <div style={{ paddingTop: '30px', backgroundColor: '#FFFFFF', marginLeft: '-18px', }} >
              <Link to={"/"} className='ementa' style={{ padding: '20px', }}>Home</Link>       
              <Link to={"/produtos"} className='ementa' style={{ padding: '20px', }}>Produtos</Link>
              <Link to={"/categorias"} className='ementa' style={{ padding: '20px', }}>Categorias</Link>
              <Link to={"/meusprodutos"} className='ementa' style={{ padding: '20px', }}>Meus Produtos</Link>
            </div>
        </header >
      </div >

  )
}

export default Header;