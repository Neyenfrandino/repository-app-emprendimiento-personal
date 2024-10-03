
import Gallery from '../../component/gallery/gallery.component.jsx'
import Button from '../../component/button/button.component.jsx'
import CardDetail from '../../component/card-detail/card-detail.component.jsx'
import BoletinHome from '../../component/boletin-home/boletin-home.component.jsx'
import Footer from '../../component/footer/footer.component.jsx'
import SectionPartners from '../../component/section-partners/section-partners.component.jsx'
import GalleryService from '../../component/gallery-service/gallery-service.component.jsx'
import Header from '../../component/header/header.component.jsx'
import TitlesSeccion from '../../component/titles-seccion/titles-seccion.component.jsx'
import GalleryAutoScroll from '../../component/gallery-auto-scroll/gallery-auto-scroll-component.jsx'

import SeccionSkillsCompany from '../../component/seccion-skills-company/seccion-skills-company.component.jsx'

import projectPortfolio from '../../project.portfolio.json'


import './home.style.scss'

// const logoBlancoLetrasNav = '/img/logoBlancoLetrasNav.png'; 
// const logoBlanco = "/img/logoBlanco.png";



const listImagesGallery = [
  {
      urlImagen: 'img/creacion-de-codigo.jpg',
      routeDetail: 'creacion-de-codigo',
      alt: 'Imagen de Creación de Codigo',
      title: 'Creación de Codigo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
      urlImagen: 'img/manejoRedesSociales.jpg',
      routeDetail: 'manejo-redes-sociales',
      alt: 'Maejo de red social',
      title: 'Manejo de Redes Sociales',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
      urlImagen: 'img/marketing.jpg',
      routeDetail: 'marketing',
      alt: 'imagen marketing',
      title: 'Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {   
      urlImagen: 'img/transformacionDigital.jpg',
      routeDetail: 'transformacion-digital',
      alt: 'imagen de transformacion digital',
      title: 'Transformación Digital',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

const data = [
  {
      image: 'img/bill-gates.jpeg',
      fraseCelebre: 'Si tu negocio no está en Internet, tu negocio no existe.',
      autor: 'Bill Gates',
      reconocimiento: 'Fundador de Microsoft',
  },
  {
      image: 'img/steve-jobs.jpeg',
      fraseCelebre: 'La innovación distingue a los líderes de los seguidores',
      autor: 'Steve Jobs',
      reconocimiento: 'Fundador de Apple'
  },
  {
      image: 'img/erich-fromm.jpeg',
      fraseCelebre: '“La creatividad requiere tener el valor de desprenderse de las certezas”',
      autor: 'Erich Fromm',
      reconocimiento: ' Psicoanalista, sociólogo y filósofo alemán, conocido por su enfoque humanista en la psicología'
  },
  {
      image: 'img/proverbio-chino.jpeg',
      fraseCelebre: '“El fracaso más grande es nunca haberlo intentado”',
      autor: 'Proverbio Chino',
      reconocimiento: '',
  },
  {
      image: 'img/Michael-Gerber.jpeg',
      fraseCelebre: '“Un emprendedor ve oportunidades allá donde otros solo ven problemas”',
      autor: 'Michael Gerber',
      reconocimiento: 'Autor del libro "El mito del emprendedor" (The E-Myth Revisited)',
  }
]

const HomeRouters = ({ iconsNetworksSocial }) => {
  return (
    <div className="home__container">
      
      <div className='home__content-header'>
        <Header route='acerca-de-mi' nameButton='Descubre Más' title={'IMPULSA TU MARCA'} img={'/img/img1.jpg'} text={'Ayudamos a marcas, negocios e influencers a causar impacto a través de soluciones dinámicas y creativas. Explora nuestro detallado Portafolio de diseño de logos y contáctanos para descubrir cómo podemos llevar tu marca al siguiente nivel.'} subtitle={'Con Visión'}/>
      </div>

      <div className='home__content__services'>
        <TitlesSeccion title={'Algunos de nuestros servicios'} subtitle={'Aquí encontrarás una selección de mis trabajos. Explora mis proyectos para saber más sobre lo que hacemos y cómo lo hacemos.'} />
        <GalleryService dataImages={listImagesGallery} />
      </div>
    
      <div className='home__content__portfolio'>
        <TitlesSeccion title={'Mi Portafolio'} subtitle={'Bienvenido a mi portafolio. Aquí encontrarás una selección de mis trabajos. Explora mis proyectos para saber más sobre lo que hacemos y cómo lo hacemos.'} />
        {/* Aquí se debe mostrar el componente gallery, que debe recibir un array de proyectos, cada uno con su título y su imagen */}
        <Gallery dataProjects={projectPortfolio} />
      </div>

      {/* <div className='home__content__section-partners'>
        <SectionPartners logos={{ logoBlancoLetrasNav, logoBlanco }} />
      </div> */}

      <div className='home__content__seccion-skills-company'>
        <SeccionSkillsCompany 
          image={'/img/COMPLETA-HONESTIDAD-TRANSPARENCIA.jpg'}
          title={'Code & Commerce Solutions (C&C-s)'}
          description={'Somos una empresa que se caracteriza por trabajar con firmeza por la mayor satisfacción de nuestros clientes.'}
          span={'COMPLETA HONESTIDAD Y TRANSPARENCIA'}
          skills={['Servicios de calidad', 'Posicionamiento de tu marca', 'Paquetes a tu alcance']}
        />
      </div>

      <div className='home__content__gallery-auto-scroll'>  
        <GalleryAutoScroll data={data} />
      </div>

      <div className='home__content__boletin'>
        <BoletinHome 
          logo={'/img/logoNegro.png'}
          text={'Mantente Informado,  únete a nuestro boletín'}
        />
      </div>

      <div>
          <Footer icons={iconsNetworksSocial} copyWhrite={'2024 Code&CommerceSolution'}  />
      </div>
          
    </div>
  )
}

export default HomeRouters;
