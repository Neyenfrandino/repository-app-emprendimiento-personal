import { createContext, useEffect, useState } from 'react';

export const UtilsContext = createContext({
    setDeployedInitLogo: () => {},
    deployedInitLogo: '',
});

export const UtilsContextProvider = ({ children }) => {

    const [deployedInitLogo, setDeployedInitLogo] = useState(()=>{
        const sessionStorageDeployedInitLogo = sessionStorage.getItem('deployedInitLogo');
        return sessionStorageDeployedInitLogo !== null ? sessionStorageDeployedInitLogo : false;
    });

    useEffect(() => {
        if(deployedInitLogo === false){
            sessionStorage.setItem('deployedInitLogo', deployedInitLogo);
        }
    }, []);


    const value = { deployedInitLogo, setDeployedInitLogo };


    const sessionStorageDeployedInitLogo = sessionStorage.getItem('deployedInitLogo');
    console.log(sessionStorageDeployedInitLogo);

    return (
        <UtilsContext.Provider value={value}>
            {children}
        </UtilsContext.Provider>
    );
};
