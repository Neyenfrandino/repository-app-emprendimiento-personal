import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonBack from '../../component/button-back/button-back.compponente';
import Header from '../../component/header/header.component.jsx';
import CardDetail from '../../component/card-detail/card-detail.component.jsx';
import Footer from '../../component/footer/footer.component.jsx';
import BoletinHome from '../../component/boletin-home/boletin-home.component.jsx';

import GalleryService from '../../component/gallery-service/gallery-service.component.jsx';

import Button from '../../component/button/button.component';

import './abaut-me.style.scss';

const listImagesGallery = [
  {
      urlImagen: 'img/img-no-comprimida.jpg',
      routeDetail: 'nuestro-equipo',
      alt: 'img-equipo',
      title: 'Sobre nuestro Equipo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const AbautMeRouters = ({ iconsNetworksSocial }) => {
    const location = useLocation();
    const isDetailPage = location.pathname === '/abaut-me';
    

    return (
        <div className='abaut-me__container'>
            <ButtonBack />
            <div className='abaut-me__header'>
                <Header 
                route='acerca-de-mi' 
                nameButton='Conoce al equipo'
                title={'Code & Commerce Solutions'} img={'/img/img1.jpg'} 
                text={<><strong>Somos una empresa especializada en el desarrollo de soluciones tecnológicas</strong>, dedicada a guiar negocios tradicionales en su transición al mundo en línea. Nos centramos en crear presencias web, funcional, implementar estrategias básicas de atracción de clientes y optimizar operaciones digitales para incrementar ingresos gradualmente. No ofrecemos soluciones instantáneas, sino un enfoque metódico y realista, adaptado a las necesidades específicas de cada negocio.<strong> Nuestro objetivo es ser un socio confiable</strong>, proporcionando orientación clara y apoyo continuo a medida que nuestros clientes se familiarizan con el entorno digital. A través de capacitación práctica y recursos accesibles...</>}
                subtitle={'La realidad a simple vista parece no ser perfecta, pero podemos aprender de ella y mejorar. Esa es una opcion que tenemos todos los seres humanos.'}
                />
            </div>

            <div className='content__detail__all'>
                <div className='abaut-me__detail'>
                    <CardDetail abaut-me__detail
                        title='Enfoque Innovador'
                        image={'/img/iconoInnovacion.png'}
                        text={'Con tecnología y diseños centrados en ti, llevamos la innovación a cada detalle. Únete a nosotros y descubre el futuro hoy.'}
                    />

                    <CardDetail 
                        title='Gestión Empresarial'
                        image={'/img/erp.png'}
                        text={'Nuestros sistemas ERP transforman tu negocio con herramientas para Facturación Electrónica, Control de Stock, CRM, Ventas y Permisos. Descubre, innova y haz crecer tu negocio al ritmo de la tecnología. ¡Descubre el futuro hoy!'}
                    />

                    <CardDetail 
                        title='Diseño y desarrollo web'
                        image={'/img/desarrolloYdiseñoweb.png'}
                        text={'Sitios web optimizados para buscadores, con interfaces responsivas (adaptadas a todos los dispositivos). Tiendas online vinculadas al sistema de Gestión.'}
                    />

                    <CardDetail 
                        title='Publicidad digital'
                        image={'/img/marketing.png'}
                        text={'Sitios web optimizados para buscadores, con interfaces responsivas (adaptadas a todos los dispositivos). Tiendas online vinculadas al sistema de Gestión.'}
                    />

                    
                </div>

                <div className='abaut-me__button-services'>
                    <Button text='Conoce mas sobre nuestros servicios' option='secondary-button' onClick={() => window.location.href = '/servicios'} />
                </div>

            </div>


            <div className='abaut-me__equipo'>
                <GalleryService dataImages={listImagesGallery} />
            </div>


            <footer className='abaut-me__footer'>
                <BoletinHome logo={'/img/logoNegro.png'} text={'Mantente Informado,  únete a nuestro boletín'} />
                <Footer icons={iconsNetworksSocial} copyWhrite={'2024 Code&CommerceSolution'}  />
            </footer>

        </div>
    );
}

export default AbautMeRouters;
