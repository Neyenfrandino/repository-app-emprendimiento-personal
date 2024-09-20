import React from 'react';
import {Link} from 'react-router-dom';
import './gallery.style.scss';

const Gallery = ({ dataProjects }) => {
  return (
    <div className="gallery__container">
      {dataProjects.map((project, index) => (        
        <div className="gallery__item" key={index}>
            <Link to={`/portafolio/${project['urlProject']}`}>
                <span  className='gallery__item-title'>{project['titleProject']}</span>
                <img src={project['imagesProject'][0]} alt={index + '-project'} />
            </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
