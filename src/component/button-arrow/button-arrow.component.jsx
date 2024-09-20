import './button-arrow.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const ButtonArrow = ({ children, onClick, leftButtonId, rightButtonId }) => {
    return (
        <div className='button-arrow__container'>
            <div className='button-arrow__left-icon'>
                <button
                    className='button-arrow__left'
                    onClick={() => onClick(leftButtonId)}
                    aria-label='Previous'
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
            
            {children}

            <div className='button-arrow__right-icon'>
                <button
                    className='button-arrow__right'
                    onClick={() => onClick(rightButtonId)}
                    aria-label='Next'
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default ButtonArrow;
    