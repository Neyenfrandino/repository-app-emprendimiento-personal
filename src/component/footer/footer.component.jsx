
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.style.scss'

const Footer = ({ icons, copyWhrite }) => {

    

    return (
        <div className='footer__container'>
            <div className='footer__text'>
                <h5>! Haznos saber y nos comunicaremos contigo ¡</h5>
            </div>
            <div className='footer__content'>
                <div className='footer__content__line--left'></div>
                
                <div className='footer__content__icons'>
                    {icons.map((icon, index) => (
                        <Link key={index} to={icon.url} className='footer__content__links--instagram'>
                            <FontAwesomeIcon icon={icon.icon} size="2x" />
                        </Link>
                    ))}


                </div>
                
                <div className='footer__content__line--right'></div>
            </div>

            <div className='footer__copyright'>
                <p>©{copyWhrite}</p>
            </div>
        </div>
    );
}
export default Footer;