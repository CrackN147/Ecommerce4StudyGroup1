import { useContext } from 'react';
import {Nav} from './components';
import Button from '@mui/material/Button';
import { LanguageContext } from 'services/contexts/LanguageContext';
export function Header() {
  const { langs, language, changeLanguage } = useContext(LanguageContext);
  return (
    <div id='header'>
      <Nav langs={langs} language={language} />
      <div className='language'>
        <Button onClick={() => changeLanguage('en')} variant="outlined">En</Button>
        <Button onClick={() => changeLanguage('ka')} variant="outlined">Ka</Button>
      </div>
    </div>
  );
}