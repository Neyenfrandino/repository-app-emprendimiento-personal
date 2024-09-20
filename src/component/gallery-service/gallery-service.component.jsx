import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './gallery-service.style.scss';


const GalleryService = ({dataImages, }) => {
    const navigate = useNavigate();


    const imagesList = () => {
        return (
            <>
                {dataImages.map((image, index) => (
                    <div className="gallery-service" key={index}>
                        <div className='gallery-service__image'>
                            <img src={image.urlImagen} alt={image.alt} />
                        </div>
    
                        <div className='gallery-service__text'>
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
    
                            <div className='gallery-service__button'>
                                <button onClick={() => navigate(image.routeDetail)}>
                                    Ver Más <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };
   
   
    return (
        <div className="gallery-service__container">
            {imagesList()}
        </div>
    )
}

export default GalleryService;