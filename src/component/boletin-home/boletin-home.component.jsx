import React from 'react';
import Form from '../form/form.component.jsx';
import Button from '../button/button.component.jsx';
import './boletin-home.style.scss';

const BoletinHome = ({ logo, text }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); // Obtén los datos del formulario
        const email = formData.get('email'); // Obtén el valor del campo de entrada

        // Depura los datos del formulario
        // console.log('FormData:', [...formData.entries()]); // Muestra todas las entradas del FormData

        if (email) {
            console.log('Correo electrónico enviado:', email);
        } else {
            console.log('El campo de correo electrónico está vacío');
        }
    };

    return (
        <div className='boletin-home__container'>
            <div className='boletin-home__container--img'>
                <div
                    className='boletin-home__content--img'
                    style={{
                        width: '50%',
                        height: '200px', // Ajusta el tamaño según sea necesario
                        backgroundImage: `url(${logo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            </div>

            <section className='boletin-home__content--section'>
                <div className='boletin-home__content--section-title'>
                    <h1 className='boletin-home__title'>{text}</h1>
                </div>

                <div className='boletin-home__content--section-input'>
                    <form onSubmit={handleSubmit}>

                        <Form text='Ingresa tu correo electrónico aquí' />

                        <div className='boletin-home__content--section-button'>
                            <div className='boletin-home__content--section-button-container'>
                                <Button text='Enviar' option={'primary-button'} type='submit' />
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BoletinHome;
