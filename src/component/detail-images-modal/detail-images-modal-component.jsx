
import ButtonBack from '../button-back/button-back.compponente';

import './detail-images-modal.style.scss';

const DetailImagesModal = ({ images, nameImg, title, description }) => {

    return (
        <div className="detail-images-modal__overlay" >
            <div className="detail-images-modal__container" onClick={(e) => e.stopPropagation()}>

                <ButtonBack  />

                <div className='detail-images-modal__header'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
              
                <div className='detail-images-modal__images-container'>
                    <img src={images} alt={nameImg} />
                </div>
                
            </div>
        </div>
    );
}

export default DetailImagesModal;
