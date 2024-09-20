import { Routes, Route } from 'react-router-dom';
import Nav from '../../component/nav/nav.component.jsx';
import HomeRouters from '../home/home.routers.jsx';
import PortfolioRouters from '../portfolio/portfolio.routers.jsx';
import AbautMeRouters from '../abaut-me/abaut-me.routers.jsx';

const NavRouters = () => {
    return (
        <>
            <Nav 
                routers={{ 
                    '/': 'Inicio', 
                    '/portafolio': 'Portafolio', 
                    '/acerca-de-mi': 'Acerca de mí', 
                    '/servicios': 'Servicios', 
                    '/contacto': 'Contacto' 
                }} 
                imgLogo={'img/logoNegroLetrasNav.png'} 
            />  
            <Routes>
                <Route path='/' element={<HomeRouters />} />
                <Route path='/portafolio/*' element={<PortfolioRouters />}/>
                <Route path='/acerca-de-mi' element={<AbautMeRouters />} />
                <Route path='/servicios' element={<div>Servicios</div>} />
                <Route path='/contacto' element={<div>Contacto</div>} />
            </Routes>
        </>
    );
}

export default NavRouters;
