
import Button from '../button/button.component.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import './header.style.scss'

const Header = ( {route, nameButton, title, img, text, subtitle, span} ) => {
    const handleOnClick = () => {
        window.location.href = `/${route}`;
    }

    return(
      <div className='header__container'>
        <div
          className='header__img'
          style={{
            width: '40%',
            height: '700px', // Ajusta el tamaño según sea necesario
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className='header__content'>
          <span  className='header__span'><FontAwesomeIcon icon={faGripLinesVertical } size='lg' color='#25FA93' /> {title}
          </span>
          <h1 className='header__title'>{title}</h1>

          <h3 className='header__title__sub'>{subtitle}</h3>

          <p>
            {text}
          </p>

          <div className='header__button'>
            <Button text={nameButton} onClick={handleOnClick} />

          </div>
        </div>
      </div>
    )
}

export default Header;