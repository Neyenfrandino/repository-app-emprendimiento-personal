import { useNavigate } from 'react-router-dom';

import { MdArrowBack } from 'react-icons/md';
import './button-back.style.scss';

const ButtonBack = () => {
    const navigate = useNavigate();

    const handleOnclickBack = () => {
        navigate(-1); // Volver a la página anterior
    };

    return(
        <>
            <button title='Volver' className="button-back" onClick={handleOnclickBack}><MdArrowBack size={24} /></button>
        </>
    )
}

export default ButtonBack;