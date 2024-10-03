import { Routes, Route } from 'react-router-dom';
import Nav from '../../component/nav/nav.component.jsx';
import HomeRouters from '../home/home.routers.jsx';
import PortfolioRouters from '../portfolio/portfolio.routers.jsx';
import AbautMeRouters from '../abaut-me/abaut-me.routers.jsx';

import ServiceRouters from '../service/service.routers.jsx';

import { faInstagram, faFacebook, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const iconsNetworksSocial = [
    { icon: faInstagram, url: 'https://www.instagram.com/design.innovadores/' },
    { icon: faFacebook, url: 'https://www.facebook.com/DesignInnovadores/' },
    { icon: faYoutube, url: 'https://www.youtube.com/channel/UC-9-v9i8-6-4-0-3-2-1' },
    // { icon: FaEnvelope , url: 'mailto:info@designinnovadores.com' },
    { icon: faTwitter, url: 'https://twitter.com/DesignInnovadores' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/company/designinnovadores/' }
  ];

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
                imgLogo={'img/logoBlancoLetrasNav.png'} 
            />  
            <Routes>
                <Route path='/' element={<HomeRouters iconsNetworksSocial={iconsNetworksSocial} />} />
                <Route path='/portafolio/*' element={<PortfolioRouters iconsNetworksSocial={iconsNetworksSocial} />}/>
                <Route path='/acerca-de-mi' element={<AbautMeRouters iconsNetworksSocial={iconsNetworksSocial} />} />
                <Route path='/servicios' element={<ServiceRouters img={'/img/img-no-comprimida-2.jpg'} />} />
                <Route path='/contacto' element={<div>Contacto</div>} />
            </Routes>
        </>
    );
}

export default NavRouters;
