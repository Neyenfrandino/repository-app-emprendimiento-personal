
import './titles-seccion.style.scss'

const TitlesSeccion = ({ title, subtitle }) => {
  return (
      <div className='titles-seccion__container'>
          <h2 className='titles-seccion__title'>{title}</h2>
          <p className='titles-seccion__subtitle'>{subtitle}</p>
      </div>
  )
}

export default TitlesSeccion;