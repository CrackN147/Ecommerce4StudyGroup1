import React, {createContext, useState} from 'react';
import {langs} from 'services/langs'; 
export const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {
  const [language, setLanguage] = useState('ka');

  function changeLanguage (language) {
    setLanguage(language);
  }

  return (
    <LanguageContext.Provider value={{
      langs,
      language,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}