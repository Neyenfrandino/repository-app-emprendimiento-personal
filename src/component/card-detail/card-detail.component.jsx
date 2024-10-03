
import Button from '../button/button.component';
import './card-detail.style.scss'

const CardDetail = ( {title, text, image} ) => {

    return (
        <div className='card-detail__container'> 
            <div className='card-detail__image'>
                <img src={image} alt='icono-representacion' />
            </div>

            <div className='card-detail__content'>
                <h1 className='card-detail__title'>{title}</h1>
                <p className='card-detail__text'>{text}</p>
            </div>           
        </div>
    )

}

export default CardDetail;