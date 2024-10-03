import { Route, Routes, useLocation } from 'react-router-dom';
import CardDescription from '../../component/card-description/card-description.component.jsx';
import DetailProject from '../../component/detail-project/detail-project.component.jsx';
import projectData from '../../project.portfolio.json';
import BoletinHome from '../../component/boletin-home/boletin-home.component.jsx';
import DetailImagesModal from '../../component/detail-images-modal/detail-images-modal-component';
import ButtonBack from '../../component/button-back/button-back.compponente';

import Footer from '../../component/footer/footer.component.jsx';

import './portfolio.style.scss';

const PortfolioRouters = ({ iconsNetworksSocial }) => {
    const location = useLocation();
    const isDetailPage = location.pathname === '/portafolio';

    const routeImage = location.pathname.split('/detail-image');
    const projectUrl = location.pathname.split('/');
    
    const projectObjectSelected = projectData.find(project => project.urlProject === projectUrl[2]);

    const image = routeImage[1] || '';

    return (
        <div className='portfolio__container'>
            
            {isDetailPage ? (
                <div className='header-portfolio'>
                    <h1 className='header-portfolio__title'>Mi Portafolio</h1>
                    <p className='header-portfolio__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            ): null}

            <Routes>
                <Route index element={<CardDescription textButton='Conoce más sobre este proyecto' projectData={projectData} />} />
                <Route path=':id/' element={
                    <DetailProject projectData={projectData}>   
                        <BoletinHome logo={'/img/logoNegro.png'} text={'Mantente Informado, únete a nuestro boletín'} />
                    </DetailProject>}
                />
                <Route path=':selectedImage/*' element={
                    projectObjectSelected ? (
                        <DetailImagesModal
                            images={image}
                            title={projectObjectSelected.titleProject || 'Título del Proyecto'}
                            description={projectObjectSelected.contentDescriptionProject || 'Descripción del Proyecto'}
                        />
                    ) : (
                        <div>Proyecto no encontrado</div>
                    )
                } />
            </Routes>
            <ButtonBack />
            <footer className='abaut-me__footer'>
                <BoletinHome logo={'/img/logoNegro.png'} text={'Mantente Informado,  únete a nuestro boletín'} />
                <Footer icons={iconsNetworksSocial} copyWhrite={'2024 Code&CommerceSolution'}  />
            </footer>
        </div>
    );
}

export default PortfolioRouters;
