import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import ButtonArrow from '../button-arrow/button-arrow.component';
import './card-description.style.scss';

const CardDescription = ({ projectData, textButton }) => {
    const navigate = useNavigate(); // Hook para navegación

    const [projectStates, setProjectStates] = useState(() =>
        projectData.reduce((acc, project) => {
            acc[project.id] = {
                currentImage: project.imagesProject[0] || '',
                contador: 0,
                isHovered: false,
                id: project.id -1,
                newClassName: 'hovvered-left',
            };
            return acc;
        }, {})
    );


    const handleOnClick = (buttonId, projectId, classNameNew) => {
        
        setProjectStates(prevStates => {
            const project = prevStates[projectId];
            const projectDataItem = projectData.find(p => p.id === projectId);
            if (!projectDataItem || !projectDataItem.imagesProject) return prevStates;
            
            const images = projectDataItem.imagesProject;
            

            const newContador = buttonId === 'left'
                ? (project.contador - 1 + images.length) % images.length
                : (project.contador + 1) % images.length;

            const newClassNameleft = buttonId === 'left'
                ? 'hovvered-left'
                : '';

            const newClassNameright = buttonId === 'right'
                ? 'hovvered-right'
                : '';
                
            // console.log(`Updating project ${projectId}: newContador = ${newContador}`);
            return {
                ...prevStates,
                [projectId]: {
                    ...project,
                    currentImage: images[newContador],
                    contador: newContador,
                    newClassName: newClassNameleft ? newClassNameleft : newClassNameright,
                }
            };
        },
        setTimeout(() => {
            setProjectStates(prevStates => {
                return Object.keys(prevStates).reduce((acc, id) => {
                    const project = prevStates[id];
                    return {
                        ...acc,
                        [id]: {
                            ...project,
                            newClassName: '',
                        }
                    };
                }, {});
            });
        }, 500) // Ajusta el tiempo según la duración de la transición
    );
    };

    const handleOnClickButtonNavegar = (linkRouter) => {
        navigate(linkRouter);
    };

    return (
        <>
            {projectData.map((project) => {
                const projectState = projectStates[project.id] || {
                    currentImage: project.imagesProject[0] || '',
                    contador: 0,
                    isHovered: false,
                    newClassName: '',
                };
                // console.log(projectState)

                return (
                    <div
                        className={`card-description__container ${projectState.isHovered ? 'hovered' : ''}`}
                        key={project.id}
                    >
                        <div className='card-description__image' style={{ backgroundColor: 'black' }}>
                            <ButtonArrow
                                leftButtonId='left'
                                rightButtonId='right'
                                onClick={(buttonId) => handleOnClick(buttonId, project.id, projectState.newClassName)}
                            >
                                <img className={ projectState.newClassName } src={projectState.currentImage} alt='current view' />
                            </ButtonArrow>
                        </div>

                        <div className='card-description__content'>
                            <h1 className='card-description__title'>{project.titleProject}</h1>
                            <p className='card-description__text'>{project.contentDescriptionProject}</p>
                            <div className='card-description__button'>
                                <Button text={textButton} onClick={() => handleOnClickButtonNavegar(project.urlProject)} option='secondary-button' />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CardDescription;
