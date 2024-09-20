import React from 'react';
import './form.style.scss';

const Form = ({ text }) => {
    return (
        <div className='form__container'>
            <label className='boletin-home__content--form-label' htmlFor="mail">
                {text}
            </label>
            <input
                className='boletin-home__content--form-input'
                type='email' // Cambié esto a 'email' para validación de correo electrónico
                id='mail'
                name='email' // Asegúrate de que este nombre coincida con el que obtienes en handleSubmit
                required
            />
        </div>
    );
};

export default Form;
