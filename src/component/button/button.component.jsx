
import './button.style.scss'

const Button = ({ text, onClick, option }) => {

    const optionsButtons = {
        'default': '',
        'primary-button': 'primary-button',
        'secondary-button': 'secondary-button'
    }

  return (
    <div className='button__container'>
      <button className= {`button ${optionsButtons[option]}`} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button;