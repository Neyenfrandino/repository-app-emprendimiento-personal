import { useState, useEffect, useContext } from 'react';
import { UtilsContext } from '../../context/utils-context/utils-context.jsx';
import './init-pag.style.scss'


const InitPag = ({ imgLogo }) => {
  const { setDeployedInitLogo } = useContext(UtilsContext);
  
  const [isVisible, setIsVisible] = useState(true);
  const [isExitAnimation, setIsExitAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsExitAnimation(true);
    }, 2000);

    setTimeout(() => {
      setIsVisible(false);
    }, 3750);
    
  }, []);


  useEffect(() => {
    if(isVisible !== true){
    setDeployedInitLogo(isVisible)
    }
  }, [isVisible]);

  return (
    <>
      {
        isVisible ? 
          <div className = {`init-pag__container ${isExitAnimation ? 'exit-animation-background' : ''}`}>
          {isVisible ? <img className = 'init-pag__img' src={imgLogo} alt='logo' /> : null}
        </div> : null
      }
    </>
  )
}

export default InitPag;