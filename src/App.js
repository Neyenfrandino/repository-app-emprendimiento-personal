import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';


import { UtilsContext } from './context/utils-context/utils-context.jsx';
import InitPag from './component/init-pag/init-pag.component';
import NavRouters from './routers/nav/nav.routers.jsx';

// import logoBlanco from './public/img/logoBlanco.png';

import './App.css';

const App = () => {
  const { deployedInitLogo } = useContext(UtilsContext);
  
  const [isVisible, setIsVisible] = useState(()=>{
    const sessionStorageDeployedInitLogo = sessionStorage.getItem('deployedInitLogo');
    return sessionStorageDeployedInitLogo !== null ? sessionStorageDeployedInitLogo : false;
  });

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3756)

  }, [deployedInitLogo == false]);

  
  return(
    <>
      {
        deployedInitLogo  ? null : <InitPag imgLogo={'/img/logoBlanco.png'} />
      }
      {
        isVisible ? 
          <>     
            <NavRouters />
          </> : null 
      }
    </>
  )
}

export default App;
