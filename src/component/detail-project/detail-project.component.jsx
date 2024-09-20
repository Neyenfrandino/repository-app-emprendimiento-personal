import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './detail-project.style.scss';

const DetailProject = ({ projectData, children }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projectData.find(project => project.urlProject === id);
    
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOnClick = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        if (isModalOpen && selectedImage) {
            navigate(`detail-image${selectedImage}`);  
        }
    }, [selectedImage]); 

    return (
        <div className='detail-project__container'>
            <div className='detail-project__content'>   
                <div className='detail-project__header'>
                    <h1 className='detail-project__title'>{project.titleProject}</h1>
                    <p className='detail-project__text'>{project.contentDescriptionProject}</p>
                </div>

                <div className='detail-project__images'>
                    {project.imagesProject.map((image, index) => (
                        <div className='image__container' key={index} onClick={() => handleOnClick(image)}>
                            <img src={image} alt={project.titleProject} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='detail-project__footer'>
                {children}
            </div>

        </div>
    );
}

export default DetailProject;
