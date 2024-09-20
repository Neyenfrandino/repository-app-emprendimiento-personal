import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonBack from '../../component/button-back/button-back.compponente';
import Header from '../../component/header/header.component.jsx';
import CardDetail from '../../component/card-detail/card-detail.component.jsx';

import './abaut-me.style.scss';

const AbautMeRouters = () => {
    const location = useLocation();
    const isDetailPage = location.pathname === '/abaut-me';
    
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
    // const [error, setError] = useState(null); // Estado para manejar errores

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await fetch('https://randomuser.me/api/?results=10');
    //             if (!response.ok) {
    //                 throw new Error('Something went wrong with the fetch operation');
    //             }
    //             const data = await response.json();
    //             setUsers(data.results); // Establece los usuarios en el estado
    //         } catch (error) {
    //             setError(error.message); // Maneja el error si ocurre
    //         } finally {
    //             setLoading(false); // Cambia el estado de carga a falso una vez completada la solicitud
    //         }
    //     };

    //     fetchUsers(); // Llama a la función para obtener usuarios
    // }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    // if (loading) return <p>Loading...</p>; // Muestra un mensaje de carga mientras se obtienen los datos
    // if (error) return <p>Error: {error}</p>; // Muestra un mensaje de error si ocurre un error

    return (
        <div className='abaut-me__container'>
            <div className='abaut-me__header'>
                <Header 
                route='acerca-de-mi' 
                nameButton='Conoce al equipo'
                title={'Code & Commerce Solutions'} img={'/img/img1.jpg'} 
                text={<><strong>Somos una empresa especializada en el desarrollo de soluciones tecnológicas</strong>, dedicada a guiar negocios tradicionales en su transición al mundo en línea. Nos centramos en crear presencias web, funcional, implementar estrategias básicas de atracción de clientes y optimizar operaciones digitales para incrementar ingresos gradualmente. No ofrecemos soluciones instantáneas, sino un enfoque metódico y realista, adaptado a las necesidades específicas de cada negocio.<strong> Nuestro objetivo es ser un socio confiable</strong>, proporcionando orientación clara y apoyo continuo a medida que nuestros clientes se familiarizan con el entorno digital. A través de capacitación práctica y recursos accesibles...</>}
                subtitle={'La realidad a simple vista parece no ser perfecta, pero podemos aprender de ella y mejorar. Esa es una opcion que tenemos todos los seres humanos.'}
                />
            </div>
            {/* <div className='abaut-me__avatars'>
                {users.map((user, index) => (
                    <img
                        src={user.picture.medium} // Usa la URL del avatar de cada usuario
                        alt={`avatar-${index}`}
                        key={index}
                    />
                ))}
            </div> */}


            <div className='content__detail__all'>
                <div className='abaut-me__detail'>
                    <CardDetail abaut-me__detail
                        title='Enfoque Innovador'
                        image={'/img/iconoInnovacion.png'}
                        text={'Con tecnología y diseños centrados en ti, llevamos la innovación a cada detalle. Únete a nosotros y descubre el futuro hoy.'}
                    />

                    <CardDetail 
                        title='Gestión Empresarial'
                        image={'/img/erp.png'}
                        text={'Nuestros sistemas ERP transforman tu negocio con herramientas para Facturación Electrónica, Control de Stock, CRM, Ventas y Permisos. Descubre, innova y haz crecer tu negocio al ritmo de la tecnología. ¡Descubre el futuro hoy!'}
                    />

                    <CardDetail 
                        title='Diseño y desarrollo web'
                        image={'/img/desarrolloYdiseñoweb.png'}
                        text={'Sitios web optimizados para buscadores, con interfaces responsivas (adaptadas a todos los dispositivos). Tiendas online vinculadas al sistema de Gestión.'}
                    />

                    <CardDetail 
                        title='Publicidad digital'
                        image={'/img/marketing.png'}
                        text={'Sitios web optimizados para buscadores, con interfaces responsivas (adaptadas a todos los dispositivos). Tiendas online vinculadas al sistema de Gestión.'}
                    />
                </div>

            </div>

            <ButtonBack />
        </div>
    );
}

export default AbautMeRouters;
