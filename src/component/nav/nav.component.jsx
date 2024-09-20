import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.style.scss'

const Nav = ({ routers, imgLogo }) => {
    const [isOpen, setIsOpen] = useState('');

    const location = useLocation();
    const currentPath = location.pathname;
    const isportafolio = currentPath.includes('/portafolio') ? '/portafolio' : '';

    useEffect(() => {
        setIsOpen(currentPath);

    }, [currentPath]);

    const routersArr = ( item ) => {
        return Object.keys(item).map((key) => {
            return (
                <li key={key}>
                    <Link className={`link--naviagations ${(isportafolio === key || currentPath == key) ? 'active' : ''}`} to={`${key}`} >{item[key]}</Link> 
                </li>
            )
        }) 
    }

    return(
        <div className="nav__container">
            <div className='nav__logo'>
                <Link to='/'>
                    <img src={imgLogo} alt='logo' />
                </Link>
            </div>

            <nav className='nav__navigation'>
                {routersArr(routers)}
            </nav>
           
        </div>
    )
}

export default Nav;

