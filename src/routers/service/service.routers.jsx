
import TitlesSeccion from '../../component/titles-seccion/titles-seccion.component.jsx';
import GalleryService from '../../component/gallery-service/gallery-service.component.jsx';
import './service.style.scss';

const ServiceRouters = ({img}) => {
    // const location = useLocation();
    // const isDetailPage = location.pathname === '/servicios';
    return (
        <div className='service__container'>
            <div className='service__header'>
                <div className='service__header__image'>
                    <img src={img} alt='img-servicios' />
                </div>

                <div className='service__header__content'>
                    <h1>Servicios personalizados</h1>
                    <span> Conoce nuestros servicios</span>

                </div>
                
            </div>
        </div>  
    )
}

export default ServiceRouters;