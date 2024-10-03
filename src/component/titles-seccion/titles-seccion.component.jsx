
import './titles-seccion.style.scss'

const TitlesSeccion = ({ title, subtitle }) => {
  return (
      <div className='titles-seccion__container'>
        <div className='titles-seccion__content'>
          <h2 className='titles-seccion__title'>{title}</h2>
          <p className='titles-seccion__subtitle'>{subtitle}</p>
        </div>

      </div>
  )
}

export default TitlesSeccion;