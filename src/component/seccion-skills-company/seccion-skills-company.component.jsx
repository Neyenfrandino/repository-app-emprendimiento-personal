import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';

import './seccion-skills-company.style.scss';

const SeccionSkillsCompany = ({image, title, description, span, skills}) => { 


    return(
        <div className='gallery-seccion-skills-company__container'>
            <div className='gallery-seccion-skills-company__image'>
                <img src={image} alt='gallery-seccion-skills-company__image'/>
            </div>
            
            <div className='gallery-seccion-skills-company__header'>
                <span className='gallery-seccion-skills-company__header-span'>   
                    <FontAwesomeIcon icon={faGripLinesVertical} size='lg' color='#25FA93' /> {span}
                </span>
                <h2 className='gallery-seccion-skills-company__title'>{title}</h2>
                <p className='gallery-seccion-skills-company__description'>{description}</p>

                <div className='gallery-seccion-skills-company__list-skills'>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>
                                <span className='gallery-seccion-skills-company__list-skills-span'>     
                                <FontAwesomeIcon icon={faCheckCircle } size='lg' color='#25FA93' /> {skill}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

    

        </div>
    )
}

export default SeccionSkillsCompany;